// src/socket.js
import { io } from 'socket.io-client';

const socket = io('https://deploy-backend-q2fr.onrender.com'); // Adjust the URL if your server is hosted elsewhere
export default socket;
