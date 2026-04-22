import mongoose from 'mongoose';

// Credenciales Expuestas NO ES RECOMENDABLE, por eso este archivo es puramente "documentación"
const MONGO_URI = "mongodb+srv://userAdmin:Jazd-0486@cluster0.j0bdtjb.mongodb.net/?appName=Cluster0";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);

    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`MongoDB conectado en: ${url}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;