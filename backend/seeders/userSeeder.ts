import { User } from "../models";

async function userSeeder() {
    await User.create({ email: 'wojci.bro@gmail.com', name: 'Wojtek', surname: 'Brońka', age: 18, password: '$2b$10$a5xra9gFr6yHwrWmDIgNZ.70U3KNLeti9gRynCzi/8Qh2HT9faRWq' });
    await User.create({ email: 'ali.gamer@op.pl', name: 'Ali', surname: 'Gamer', age: 18, password: '$2b$10$a5xra9gFr6yHwrWmDIgNZ.70U3KNLeti9gRynCzi/8Qh2HT9faRWq' })
}

export default userSeeder;