import { Account, Client, Databases, ID } from 'appwrite'

const client = new Client()

client
	.setEndpoint('https://fra.cloud.appwrite.io/v1') // Frankfurt!
	.setProject('6876898e00024edd0e10')

export const ACCOUNT = new Account(client)
export const DATABASE = new Databases(client)
export const UNIQUE_ID = ID.unique()
