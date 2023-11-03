import mongoose, { mongo } from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://luthfidbz:FQd2iyRX40tJuVXL@luthfidb.x4sdo.mongodb.net/mernauth?")
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB