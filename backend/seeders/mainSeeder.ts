import dotenv from 'dotenv';
dotenv.config();
import { Application, Company, Message, Notification, Offer, OfferThumbnailView, OfferView, RefreshToken, Technology, User } from "../models";
import userSeeder from "./userSeeder";
import companySeeder from "./companySeeder";
import mongoose from "mongoose";

async function truncate() {
    await Application.deleteMany();
    await Company.deleteMany();
    await Message.deleteMany();
    await Notification.deleteMany();
    await Offer.deleteMany();
    await OfferThumbnailView.deleteMany();
    await OfferView.deleteMany();
    await RefreshToken.deleteMany();
    await Technology.deleteMany();
    await User.deleteMany();
}

async function main() {
    await mongoose.connect(process.env.MONGO_URL as string);
    await truncate();
    await userSeeder();
    await companySeeder();
}

main();