# UberClone

A feature-rich Uber clone built with React, designed to simulate ride-hailing functionality with a focus on intuitive UI and seamless performance.

## 🚀 Features
- **User Authentication**: Secure sign-up and login system with JWT authentication.
- **Map Integration**: Real-time map visualization using Mapbox for precise route plotting.
- **Ride Booking**: Users can select pickup and drop-off points, estimate fares, and confirm rides.
- **Driver Dashboard**: Interactive interface for drivers to accept and manage rides.
- **Payment Integration**: Simulated payment gateway for completing transactions.
- **Responsive Design**: Optimized for mobile and desktop experiences.

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (optional for dynamic ride storage)
- **API Integration:** Mapbox API, Stripe API (mock implementation)
- **State Management:** Redux Toolkit

## 📋 Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/pillowcasestudies/uberclone.git
   cd uberclone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following keys:
   ```env
   REACT_APP_MAPBOX_API_KEY=your_mapbox_api_key
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. **Run the app:**
   ```bash
   npm start
   ```

5. **Backend setup (if applicable):**
   ```bash
   cd backend
   npm install
   npm start
   ```



## 📖 Usage
1. **Sign up or log in** to access the platform.
2. Use the interactive map to **select your pickup and drop-off points**.
3. Confirm the ride details and proceed to payment.
4. Drivers can view active requests and **accept rides** in real-time.

## 🧩 Future Improvements
- Implement real-time chat between users and drivers.
- Add advanced fare calculation based on traffic data.
- Introduce ride history and past trip analytics.

## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push your branch (`git push origin feature-name`).
5. Create a pull request.

## 📄 License
This project is licensed under the [MIT License](LICENSE).

## 📬 Contact
For questions or collaboration, feel free to reach out:
- **Email:** barryaweinstein@gmail.com
- **GitHub:** [pillowcasestudies](https://github.com/pillowcasestudies)



