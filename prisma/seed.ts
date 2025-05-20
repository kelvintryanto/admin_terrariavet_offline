import {
  CategoryType,
  PaymentMethod,
  PrismaClient,
  Sex,
  TreatmentType,
} from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Starting database seeding...');

    // Clean existing data
    console.log('Cleaning existing data...');
    await prisma.invoiceProduct.deleteMany();
    await prisma.invoiceService.deleteMany();
    await prisma.invoice.deleteMany();
    await prisma.diagnose.deleteMany();
    await prisma.product.deleteMany();
    await prisma.service.deleteMany();
    await prisma.category.deleteMany();
    await prisma.dog.deleteMany();
    await prisma.breed.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.user.deleteMany();

    // Seed users
    console.log('Seeding users...');
    await prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@terrariavet.com',
        role: 'admin',
        password: await bcrypt.hash('admin123', 10),
        profileImage: 'https://ui-avatars.com/api/?name=Admin+User',
      },
    });

    await prisma.user.create({
      data: {
        name: 'Doctor User',
        email: 'doctor@terrariavet.com',
        role: 'doctor',
        password: await bcrypt.hash('doctor123', 10),
        profileImage: 'https://ui-avatars.com/api/?name=Doctor+User',
      },
    });

    // Seed breeds
    console.log('Seeding dog breeds...');
    const breeds = [
      { name: 'Golden Retriever' },
      { name: 'Labrador' },
      { name: 'Poodle' },
      { name: 'German Shepherd' },
      { name: 'Bulldog' },
      { name: 'Chihuahua' },
      { name: 'Pomeranian' },
      { name: 'Shih Tzu' },
      { name: 'Siberian Husky' },
      { name: 'Dachshund' },
    ];

    for (const breed of breeds) {
      await prisma.breed.create({ data: breed });
    }

    // Seed categories
    console.log('Seeding categories...');
    const productCategories = [
      { name: 'Medicine', type: CategoryType.product },
      { name: 'Food', type: CategoryType.product },
      { name: 'Accessories', type: CategoryType.product },
    ];

    const serviceCategories = [
      { name: 'Checkup', type: CategoryType.service },
      { name: 'Surgery', type: CategoryType.service },
      { name: 'Grooming', type: CategoryType.service },
      { name: 'Vaccination', type: CategoryType.service },
    ];

    // Define proper type for categoryIds
    interface CategoryIds {
      products: Record<string, string>;
      services: Record<string, string>;
    }

    const categoryIds: CategoryIds = {
      products: {},
      services: {},
    };

    for (const category of productCategories) {
      const cat = await prisma.category.create({ data: category });
      categoryIds.products[category.name] = cat.id;
    }

    for (const category of serviceCategories) {
      const cat = await prisma.category.create({ data: category });
      categoryIds.services[category.name] = cat.id;
    }

    // Seed products
    console.log('Seeding products...');
    const products = [
      {
        code: 'MED001',
        name: 'Antibiotic - Amoxicillin',
        categoryId: categoryIds.products['Medicine'],
        description: 'Broad-spectrum antibiotic for bacterial infections',
        amount: 50,
        price: 15000,
      },
      {
        code: 'MED002',
        name: 'Pain Relief Syrup',
        categoryId: categoryIds.products['Medicine'],
        description: 'Relief for mild to moderate pain',
        amount: 30,
        price: 25000,
      },
      {
        code: 'FOOD001',
        name: 'Premium Dry Dog Food (1kg)',
        categoryId: categoryIds.products['Food'],
        description: 'High-quality nutrition for adult dogs',
        amount: 20,
        price: 50000,
      },
      {
        code: 'ACC001',
        name: 'Adjustable Collar - Small',
        categoryId: categoryIds.products['Accessories'],
        description: 'Comfortable collar for small dogs',
        amount: 15,
        price: 35000,
      },
    ];

    for (const product of products) {
      await prisma.product.create({ data: product });
    }

    // Seed services
    console.log('Seeding services...');
    const services = [
      {
        code: 'CHK001',
        name: 'Regular Checkup',
        categoryId: categoryIds.services['Checkup'],
        description: 'Basic health examination',
        price: 100000,
      },
      {
        code: 'VAX001',
        name: 'Rabies Vaccination',
        categoryId: categoryIds.services['Vaccination'],
        description: 'Standard rabies vaccination',
        price: 150000,
      },
      {
        code: 'GRM001',
        name: 'Basic Grooming',
        categoryId: categoryIds.services['Grooming'],
        description: 'Includes bath, nail trimming, and ear cleaning',
        price: 200000,
      },
      {
        code: 'SRG001',
        name: 'Spay/Neuter Procedure',
        categoryId: categoryIds.services['Surgery'],
        description: 'Standard spay or neuter surgery',
        price: 1500000,
      },
    ];

    for (const service of services) {
      await prisma.service.create({ data: service });
    }

    // Seed customers and dogs
    console.log('Seeding customers and dogs...');
    const customers = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '081234567890',
        address: 'Jl. Mangga No. 5, Jakarta',
        profileImage: 'https://ui-avatars.com/api/?name=John+Doe',
        dogs: [
          {
            name: 'Max',
            breedId:
              (
                await prisma.breed.findFirst({
                  where: { name: 'Golden Retriever' },
                })
              )?.id ?? '',
            birthYear: 2020,
            birthMonth: 3,
            color: 'Golden',
            weight: 30.5,
            sex: Sex.male,
            lastVaccineDate: new Date('2023-06-15'),
            lastDewormDate: new Date('2023-05-20'),
            profileImage:
              'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=562&q=80',
            notes: 'Friendly and energetic',
          },
        ],
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '087654321098',
        address: 'Jl. Melati No. 12, Bandung',
        profileImage: 'https://ui-avatars.com/api/?name=Jane+Smith',
        dogs: [
          {
            name: 'Bella',
            breedId:
              (await prisma.breed.findFirst({ where: { name: 'Poodle' } }))
                ?.id ?? '',
            birthYear: 2021,
            birthMonth: 7,
            color: 'White',
            weight: 8.2,
            sex: Sex.female,
            lastVaccineDate: new Date('2023-07-10'),
            lastDewormDate: new Date('2023-06-25'),
            profileImage:
              'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            notes: 'Loves to play fetch',
          },
        ],
      },
    ];

    for (const customer of customers) {
      const { dogs, ...customerData } = customer;
      const createdCustomer = await prisma.customer.create({
        data: customerData,
      });

      for (const dog of dogs) {
        await prisma.dog.create({
          data: {
            ...dog,
            customerId: createdCustomer.id,
          },
        });
      }
    }

    // Seed diagnoses
    console.log('Seeding diagnoses...');
    const johnDog = await prisma.dog.findFirst({
      where: { customer: { email: 'john@example.com' }, name: 'Max' },
    });

    if (johnDog) {
      await prisma.diagnose.create({
        data: {
          dxNumber: 'DX-2023-001',
          dxDate: new Date('2023-08-15'),
          doctorName: 'Dr. Sarah Johnson',
          customerId: johnDog.customerId,
          dogId: johnDog.id,
          symptom: 'Lethargy, decreased appetite',
          description:
            'Mild stomach infection, prescribed antibiotics and special diet',
          temperature: 38.9,
          weight: 30.5,
          bloodPressure: 'Normal',
          notes: 'Follow-up visit in 7 days',
        },
      });
    }

    // Seed invoice with services and products
    console.log('Seeding invoice data...');
    const janeDog = await prisma.dog.findFirst({
      where: { customer: { email: 'jane@example.com' }, name: 'Bella' },
    });

    if (janeDog) {
      const checkupService = await prisma.service.findFirst({
        where: { code: 'CHK001' },
      });

      const medicine = await prisma.product.findFirst({
        where: { code: 'MED001' },
      });

      if (checkupService && medicine) {
        const invoiceData = {
          invoiceNo: 'INV-2023-001',
          customerId: janeDog.customerId,
          dogId: janeDog.id,
          inpatientDate: '2023-08-20',
          inpatientTime: '09:00',
          dischargeDate: '2023-08-20',
          dischargeTime: '11:30',
          treatmentType: TreatmentType.rawatJalan,
          paymentMethod: PaymentMethod.Cash,
          customPaymentMethod: '',
          subtotal: checkupService.price + medicine.price * 2,
          total: checkupService.price + medicine.price * 2,
          deposit: 0,
          balance: 0,
          notes: 'Regular checkup and medication',
        };

        const invoice = await prisma.invoice.create({
          data: invoiceData,
        });

        // Add service to invoice
        await prisma.invoiceService.create({
          data: {
            invoiceId: invoice.id,
            serviceId: checkupService.id,
            name: checkupService.name,
            code: checkupService.code,
            datetime: new Date('2023-08-20T09:30:00'),
            duration: '30min',
            price: checkupService.price,
          },
        });

        // Add product to invoice
        await prisma.invoiceProduct.create({
          data: {
            invoiceId: invoice.id,
            productId: medicine.id,
            name: medicine.name,
            code: medicine.code,
            amount: 2,
            price: medicine.price,
          },
        });
      }
    }

    console.log('Seeding completed successfully!');
  } catch (e) {
    console.error('Seeding failed with error:');
    console.error(e);
    throw e;
  }
}

main()
  .catch((e) => {
    console.error('Error in main function:');
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    try {
      await prisma.$disconnect();
    } catch (e) {
      console.error('Error during disconnection:');
      console.error(e);
    }
  });
