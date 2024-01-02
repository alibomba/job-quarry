import { Company } from "../models";

async function companySeeder() {
    await Company.create({ email: 'tech@gmail.com', companyName: 'Tech sp.z.o.o', password: '$2b$10$a5xra9gFr6yHwrWmDIgNZ.70U3KNLeti9gRynCzi/8Qh2HT9faRWq' });
}

export default companySeeder;