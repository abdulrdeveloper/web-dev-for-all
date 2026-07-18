# 🌍 Currencywise (Currency Converter)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Welcome to **Currencywise**, a premium, real-time Currency Converter application built with React.js and Tailwind CSS. Designed with a stunning glassmorphic UI, Currencywise delivers lightning-fast exchange rates and a seamless user experience.

## ✨ Key Features
- **Real-Time Exchange Rates:** Fetches live data to ensure accurate and up-to-date currency conversions.
- **Premium Glassmorphic UI:** A visually striking interface featuring custom light-theme gradients, blur effects, and golden accents.
- **One-Click Swap:** Instantly switch between "From" and "To" currencies with a smooth animated button.
- **Optimized Performance:** Built with Vite and React for snappy load times, minimal re-renders, and zero-lag interactions.
- **Fully Responsive:** Flawless experience across all devices (Desktop, Tablet, Mobile) with intuitive CSS grid & flexbox layouts.
- **Custom React Hooks:** Clean architecture utilizing a dedicated `useCurrencyInfo` hook for modular API logic.

## 🛠️ Tech Stack
- **Frontend:** React.js (Functional Components, Hooks)
- **Styling:** Tailwind CSS (Custom themes, animations, glassmorphism layers)
- **Build Tool:** Vite
- **API:** Free Currency API (Public API for real-time rates)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/currencywise.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd currencywise
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 📁 Project Structure
```text
src/
├── components/
│   └── InputBox.jsx       # Reusable input component for currency and amount
├── hooks/
│   └── useCurrencyInfo.js # Custom hook fetching live API data
├── App.jsx                # Main application layout and logic
├── index.css              # Tailwind configurations and custom UI layers
└── main.jsx               # React mounting point
```

## 💡 How It Works
1. Enter the amount you wish to convert in the top input box.
2. Select your base currency and your target currency from the dropdown menus.
3. The app instantly fetches the latest exchange rate and displays the converted value.
4. Use the custom Swap button to reverse the conversion instantly.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License
This project is [MIT](https://opensource.org/licenses/MIT) licensed.

---
<div align="center">
  <sub>
    You can find more of my work at <a href="https://abdulrdeveloper.me">abdulrdeveloper.me</a> &nbsp;·&nbsp; 
    Read more posts at <a href="https://blog.abdulrdeveloper.me">blog.abdulrdeveloper.me</a> &nbsp;·&nbsp; 
    See more projects on <a href="https://github.com/abdulrdeveloper">GitHub</a>
  </sub>
</div>
<br/>
