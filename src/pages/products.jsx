import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/landingPage/navbar';

const productsData = [
  {
    sectionTitle: 'Education',
    services: [
      { title: 'E Book Apps', description: 'Develop interactive eBook applications.', icon: 'fas fa-book', link: '#', bgColor: 'bg-white' },
      { title: 'Job Portal App', description: 'Create job portal applications for job seekers and employers.', icon: 'fas fa-briefcase', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Job Portal Website', description: 'Develop comprehensive job portal websites.', icon: 'fas fa-globe', link: '#', bgColor: 'bg-white' },
      { title: 'Quiz Apps', description: 'Interactive quiz applications for education and fun.', icon: 'fas fa-question-circle', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Online Exam Apps & Websites', description: 'Solutions for online exams and assessments.', icon: 'fas fa-laptop', link: '#', bgColor: 'bg-white' },
      { title: 'Language Learning App', description: 'Develop apps for learning new languages.', icon: 'fas fa-language', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Tutor Checking App', description: 'Applications for tutor and student interaction.', icon: 'fas fa-chalkboard-teacher', link: '#', bgColor: 'bg-white' },
      { title: 'Career Guidance App', description: 'Apps for career guidance and counseling.', icon: 'fas fa-user-graduate', link: '#', bgColor: 'bg-gradient-to-r from-orange-500 to-orange-300 text-white' },
      { title: 'Dictionary App', description: 'Interactive dictionary applications.', icon: 'fas fa-book-reader', link: '#', bgColor: 'bg-white' },
      { title: 'School Bus App', description: 'Track school buses and routes.', icon: 'fas fa-bus', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'School Management App', description: 'Manage school operations and activities.', icon: 'fas fa-school', link: '#', bgColor: 'bg-white' },
      { title: 'Job & Freelancer Apps', description: 'Apps for job seekers and freelancers.', icon: 'fas fa-user-tie', link: '#', bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white' },
    ],
  },
  {
    sectionTitle: 'Health',
    services: [
      { title: 'Doctor Booking Apps', description: 'Book doctor appointments easily.', icon: 'fas fa-user-md', link: '#', bgColor: 'bg-white' },
      { title: 'Pill Reminder', description: 'Reminders for taking pills on time.', icon: 'fas fa-pills', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Diagnostics App', description: 'Manage diagnostic tests and results.', icon: 'fas fa-vials', link: '#', bgColor: 'bg-white' },
      { title: 'Water Drink Reminder', description: 'Reminders to drink water regularly.', icon: 'fas fa-glass-whiskey', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Yoga App', description: 'Guided yoga sessions and tutorials.', icon: 'fas fa-spa', link: '#', bgColor: 'bg-white' },
      { title: 'Fitness App', description: 'Track fitness activities and goals.', icon: 'fas fa-dumbbell', link: '#', bgColor: 'bg-gradient-to-r from-orange-500 to-orange-300 text-white' },
      { title: 'Gym App', description: 'Manage gym memberships and schedules.', icon: 'fas fa-heartbeat', link: '#', bgColor: 'bg-white' },
      { title: 'Health Checkup App', description: 'Schedule health checkups and track results.', icon: 'fas fa-stethoscope', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Food Planner', description: 'Plan and track your diet.', icon: 'fas fa-utensils', link: '#', bgColor: 'bg-white' },
      { title: 'Telemedicine App', description: 'Consult with doctors online.', icon: 'fas fa-hospital', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
    ],
  },
  {
    sectionTitle: 'Food',
    services: [
      { title: 'Hotels Finder App', description: 'Find the best hotels around you with our Hotels Finder App.', icon: 'fas fa-hotel', link: '#', bgColor: 'bg-white' },
      { title: 'Food Donation App', description: 'Donate surplus food to those in need with our Food Donation App.', icon: 'fas fa-hand-holding-heart', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Hotel Booking App', description: 'Book hotels easily and quickly with our Hotel Booking App.', icon: 'fas fa-calendar-check', link: '#', bgColor: 'bg-white' },
      { title: 'Food Delivery App', description: 'Order food from your favorite restaurants with our Food Delivery App.', icon: 'fas fa-utensils', link: '#', bgColor: 'bg-gradient-to-r from-orange-500 to-orange-300 text-white' },
      { title: 'Restaurant POS Software', description: 'Manage your restaurant efficiently with our Restaurant POS Software.', icon: 'fas fa-cash-register', link: '#', bgColor: 'bg-white' },
      { title: 'Restaurant QR Menu', description: 'Offer a contactless menu experience with our Restaurant QR Menu.', icon: 'fas fa-qrcode', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Food Delivery Websites', description: 'Create an online presence for your food delivery service with our Food Delivery Websites.', icon: 'fas fa-globe', link: '#', bgColor: 'bg-white' },
    ],
  },
  {
    sectionTitle: 'Real Estate',
    services: [
      { title: 'Buy & Sell Apps', description: 'Easily buy and sell properties with our Buy & Sell Apps.', icon: 'fas fa-home', link: '#', bgColor: 'bg-white' },
      { title: 'Real Estate Websites', description: 'Create professional real estate websites to showcase properties.', icon: 'fas fa-globe', link: '#', bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white' },
      { title: 'Agents Management', description: 'Manage real estate agents efficiently with our Agents Management tools.', icon: 'fas fa-user-tie', link: '#', bgColor: 'bg-white' },
      { title: 'Apartments Management Software', description: 'Manage apartment complexes and tenants with our Apartments Management Software.', icon: 'fas fa-building', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Food Blog', description: 'Share recipes and food tips with our customizable Food Blog templates.', icon: 'fas fa-blog', link: '#', bgColor: 'bg-white' },
      { title: 'Real Estate Agency Portal', description: 'Provide a portal for your real estate agency with our comprehensive solution.', icon: 'fas fa-archway', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Real Estate CRM', description: 'Manage customer relationships effectively with our Real Estate CRM.', icon: 'fas fa-users', link: '#', bgColor: 'bg-white' },
      { title: 'Real Estate Lead Management', description: 'Track and manage leads with our Real Estate Lead Management software.', icon: 'fas fa-chart-line', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Real Estate Investment Platforms', description: 'Platforms for real estate investments.', icon: 'fas fa-money-bill-wave', link: '#', bgColor: 'bg-white' },
      { title: 'Real Estate Listing Platform', description: 'List and showcase properties for sale or rent.', icon: 'fas fa-list-alt', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
    ],
  },
  {
    sectionTitle: 'Finance',
    services: [
      { title: 'Expense Management Apps', description: 'Track and manage your expenses.', icon: 'fas fa-wallet', link: '#', bgColor: 'bg-white' },
      { title: 'Investment Apps', description: 'Manage your investments and track their performance.', icon: 'fas fa-chart-line', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Loan Management Apps', description: 'Manage loans and repayments.', icon: 'fas fa-money-check-alt', link: '#', bgColor: 'bg-white' },
      { title: 'Recovery Apps', description: 'Manage and track debt recovery.', icon: 'fas fa-hand-holding-usd', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Credit App', description: 'Manage your credit and track credit scores.', icon: 'fas fa-credit-card', link: '#', bgColor: 'bg-white' },
    ],
  },
  {
    sectionTitle: 'Delivery Segments',
    services: [
      { title: 'E-commerce Apps and Websites', description: 'Develop comprehensive e-commerce solutions.', icon: 'fas fa-shopping-cart', link: '#', bgColor: 'bg-white' },
      { title: 'Food Delivery', description: 'Order and deliver food with ease.', icon: 'fas fa-utensils', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Grocery Delivery', description: 'Deliver groceries to customers.', icon: 'fas fa-shopping-basket', link: '#', bgColor: 'bg-white' },
      { title: 'Medicine Delivery', description: 'Deliver medicines and health products.', icon: 'fas fa-prescription-bottle', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Plants Delivery', description: 'Deliver plants and gardening supplies.', icon: 'fas fa-seedling', link: '#', bgColor: 'bg-white' },
      { title: 'Meat and Chicken Delivery', description: 'Deliver fresh meat and chicken products.', icon: 'fas fa-drumstick-bite', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Furniture Delivery Apps', description: 'Deliver furniture and home goods.', icon: 'fas fa-couch', link: '#', bgColor: 'bg-white' },
      { title: 'Books Delivery App', description: 'Deliver books to customers.', icon: 'fas fa-book', link: '#', bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white' },
      { title: 'Vegetables Delivery App', description: 'Deliver fresh vegetables to customers.', icon: 'fas fa-carrot', link: '#', bgColor: 'bg-white' },
    ],
  },
  {
    sectionTitle: 'Transports and Travels',
    services: [
      { title: 'Bike Taxi Apps', description: 'Book bike taxis for quick transportation.', icon: 'fas fa-motorcycle', link: '#', bgColor: 'bg-white' },
      { title: 'Car Taxi Apps', description: 'Book car taxis for convenient travel.', icon: 'fas fa-taxi', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Car Pooling Services', description: 'Share rides with car pooling services.', icon: 'fas fa-car', link: '#', bgColor: 'bg-white' },
      { title: 'Goods Delivery Apps', description: 'Deliver goods locally and nationally.', icon: 'fas fa-truck', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Local Parcel Delivery Apps', description: 'Deliver parcels within local areas.', icon: 'fas fa-box', link: '#', bgColor: 'bg-white' },
      { title: 'City or Travel Guide App', description: 'Guide for city tours and travel destinations.', icon: 'fas fa-map', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Park Space Finder App', description: 'Find and book parking spaces.', icon: 'fas fa-parking', link: '#', bgColor: 'bg-white' },
      { title: 'Car Rental App', description: 'Rent cars for short and long trips.', icon: 'fas fa-car-rental', link: '#', bgColor: 'bg-gradient-to-r from-orange-500 to-orange-300 text-white' },
      { title: 'Bike Rental App', description: 'Rent bikes for daily commutes.', icon: 'fas fa-bicycle', link: '#', bgColor: 'bg-white' },
      { title: 'Car Wash App', description: 'Book car wash services conveniently.', icon: 'fas fa-broom', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Mechanic App', description: 'Find and book mechanics for car repairs.', icon: 'fas fa-wrench', link: '#', bgColor: 'bg-white' },
      { title: 'Travel Booking App', description: 'Book travel tickets and accommodations.', icon: 'fas fa-plane-departure', link: '#', bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white' },
      { title: 'Bus Tickets App', description: 'Book bus tickets easily.', icon: 'fas fa-bus-alt', link: '#', bgColor: 'bg-white' },
    ],
  },
  {
    sectionTitle: 'Communication',
    services: [
      { title: 'Music Apps', description: 'Stream and listen to music.', icon: 'fas fa-music', link: '#', bgColor: 'bg-white' },
      { title: 'Music Websites', description: 'Browse and listen to music online.', icon: 'fas fa-headphones-alt', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Video Streaming Apps and Websites (OTT)', description: 'Stream videos online.', icon: 'fas fa-video', link: '#', bgColor: 'bg-white' },
      { title: 'News Apps', description: 'Stay updated with the latest news.', icon: 'fas fa-newspaper', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'News Websites', description: 'Read news articles online.', icon: 'fas fa-globe', link: '#', bgColor: 'bg-white' },
      { title: 'Online Radio Apps', description: 'Listen to online radio stations.', icon: 'fas fa-broadcast-tower', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Chatting Apps', description: 'Chat with friends and family.', icon: 'fas fa-comments', link: '#', bgColor: 'bg-white' },
      { title: 'Social Media Apps', description: 'Connect with people on social media.', icon: 'fas fa-users', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Video Editing Apps', description: 'Edit videos with ease.', icon: 'fas fa-video-edit', link: '#', bgColor: 'bg-white' },
      { title: 'Audio Editing Apps', description: 'Edit audio files seamlessly.', icon: 'fas fa-waveform', link: '#', bgColor: 'bg-gradient-to-r from-orange-500 to-orange-300 text-white' },
      { title: 'Posters and Logo Designing Websites and Apps', description: 'Design posters and logos.', icon: 'fas fa-paint-brush', link: '#', bgColor: 'bg-white' },
      { title: 'Wallpaper Designing Apps', description: 'Create custom wallpapers.', icon: 'fas fa-image', link: '#', bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white' },
      { title: 'Events Apps', description: 'Plan and manage events.', icon: 'fas fa-calendar-alt', link: '#', bgColor: 'bg-white' },
      { title: 'Video Call Apps', description: 'Make video calls.', icon: 'fas fa-video-call', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Audio Call Apps', description: 'Make audio calls.', icon: 'fas fa-phone-alt', link: '#', bgColor: 'bg-white' },
      { title: 'Dating Apps', description: 'Connect with potential partners.', icon: 'fas fa-heart', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Blog', description: 'Write and share blogs.', icon: 'fas fa-blog', link: '#', bgColor: 'bg-white' },
      { title: 'WhatsApp Marketing Software', description: 'Automate WhatsApp marketing.', icon: 'fas fa-whatsapp', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Bulk SMS Software', description: 'Send bulk SMS messages.', icon: 'fas fa-sms', link: '#', bgColor: 'bg-white' },
      { title: 'Telegram Marketing Software', description: 'Automate Telegram marketing.', icon: 'fas fa-telegram-plane', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Email Marketing', description: 'Manage email marketing campaigns.', icon: 'fas fa-envelope', link: '#', bgColor: 'bg-white' },
    ],
  },
  {
    sectionTitle: 'Politics',
    services: [
      { title: 'Political Apps', description: 'Engage with voters through interactive political apps.', icon: 'fas fa-vote-yea', link: '#', bgColor: 'bg-white' },
      { title: 'Election Survey Apps', description: 'Conduct surveys and gather voter opinions with our Election Survey Apps.', icon: 'fas fa-poll', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Online Voting Apps', description: 'Facilitate secure online voting with our Online Voting Apps.', icon: 'fas fa-check-circle', link: '#', bgColor: 'bg-white' },
      { title: 'Candidate Profile Website', description: 'Showcase candidate profiles and campaign details with our Candidate Profile Websites.', icon: 'fas fa-user', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Candidate Meeting App', description: 'Organize and manage candidate meetings with our Candidate Meeting Apps.', icon: 'fas fa-handshake', link: '#', bgColor: 'bg-white' },
    ],
  },
  {
    sectionTitle: 'Construction',
    services: [
      { title: 'Construction Management App', description: 'Manage construction projects efficiently with our Construction Management Apps.', icon: 'fas fa-hard-hat', link: '#', bgColor: 'bg-white' },
      { title: 'Construction Materials Delivery Mobile App', description: 'Deliver construction materials seamlessly with our delivery app.', icon: 'fas fa-truck-loading', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Construction Websites', description: 'Build professional websites for construction companies.', icon: 'fas fa-globe', link: '#', bgColor: 'bg-white' },
    ],
  },
  {
    sectionTitle: 'Billing Software & POS & Others',
    services: [
      { title: 'Custom Software Development', description: 'Get custom software tailored to your business needs.', icon: 'fas fa-code', link: '#', bgColor: 'bg-white' },
      { title: 'Grocery Billing Software', description: 'Efficiently manage billing for grocery stores with our software.', icon: 'fas fa-receipt', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Super Market Billing Software', description: 'Streamline billing operations for supermarkets with our billing software.', icon: 'fas fa-shopping-cart', link: '#', bgColor: 'bg-white' },
      { title: 'Inventory Management App and Website', description: 'Track and manage your inventory with our app and website solutions.', icon: 'fas fa-warehouse', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Spa & Salon Management Software', description: 'Manage spa and salon appointments, billing, and more with our software.', icon: 'fas fa-spa', link: '#', bgColor: 'bg-white' },
      { title: 'GST Billing Software', description: 'Simplify GST billing with our comprehensive billing software.', icon: 'fas fa-file-invoice-dollar', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Hospital Billing Software', description: 'Manage hospital billing efficiently with our specialized software.', icon: 'fas fa-hospital', link: '#', bgColor: 'bg-white' },
      { title: 'Hotel Billing Software', description: 'Streamline hotel billing operations with our tailored software.', icon: 'fas fa-bed', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'QR Menu For Hotels', description: 'Provide a digital menu experience for hotels with our QR menu solution.', icon: 'fas fa-qrcode', link: '#', bgColor: 'bg-white' },
      { title: 'Laundry Management', description: 'Manage laundry services efficiently with our management software.', icon: 'fas fa-tshirt', link: '#', bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white' },
      { title: 'Stock Management Software', description: 'Keep track of stock levels with our stock management software.', icon: 'fas fa-boxes', link: '#', bgColor: 'bg-white' },
      { title: 'Property Management Software', description: 'Manage properties efficiently with our property management software.', icon: 'fas fa-home', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Apartment Management Software', description: 'Streamline apartment management with our comprehensive software solution.', icon: 'fas fa-building', link: '#', bgColor: 'bg-white' },
      { title: 'Pharmacy Billing Software', description: 'Manage pharmacy billing with ease using our specialized software.', icon: 'fas fa-pills', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Leads Management Software', description: 'Track and manage leads effectively with our leads management software.', icon: 'fas fa-chart-line', link: '#', bgColor: 'bg-white' },
      { title: 'Loan Management Software', description: 'Manage loans and repayments with our loan management software.', icon: 'fas fa-money-check-alt', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Security Guard Management Software', description: 'Efficiently manage security personnel with our management software.', icon: 'fas fa-shield-alt', link: '#', bgColor: 'bg-white' },
      { title: 'Insurance Management Software', description: 'Manage insurance policies and claims with our insurance management software.', icon: 'fas fa-clipboard-check', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Tailor Management Software', description: 'Manage tailoring services and orders with our tailor management software.', icon: 'fas fa-cut', link: '#', bgColor: 'bg-white' },
      { title: 'Field Service Tracking Software', description: 'Track and manage field services with our tracking software.', icon: 'fas fa-map-marker-alt', link: '#', bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white' },
      { title: 'Help Desk Ticket Management Software', description: 'Manage help desk tickets efficiently with our ticket management software.', icon: 'fas fa-ticket-alt', link: '#', bgColor: 'bg-white' },
      { title: 'Gym Management Software', description: 'Manage gym memberships, billing, and more with our gym management software.', icon: 'fas fa-dumbbell', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Vehicle Repair Management Software', description: 'Manage vehicle repair services with our specialized software.', icon: 'fas fa-car', link: '#', bgColor: 'bg-white' },
      { title: 'Garage Management Software', description: 'Manage garage operations efficiently with our management software.', icon: 'fas fa-tools', link: '#', bgColor: 'bg-gradient-to-r from-blue-500 to-blue-300 text-white' },
      { title: 'Visitor Management Software', description: 'Track and manage visitors with our visitor management software.', icon: 'fas fa-user-check', link: '#', bgColor: 'bg-white' },
      { title: 'Parking Management', description: 'Manage parking facilities efficiently with our parking management software.', icon: 'fas fa-parking', link: '#', bgColor: 'bg-gradient-to-r from-red-500 to-red-300 text-white' },
      { title: 'Appointment Management Software', description: 'Schedule and manage appointments with our appointment management software.', icon: 'fas fa-calendar-alt', link: '#', bgColor: 'bg-white' },
      { title: 'Digital Record Management Software', description: 'Manage digital records securely with our record management software.', icon: 'fas fa-database', link: '#', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white' },
      { title: 'Job Portal Management Software', description: 'Manage job listings and applications with our job portal management software.', icon: 'fas fa-briefcase', link: '#', bgColor: 'bg-white' },
      { title: 'Project Management Software', description: 'Track and manage projects efficiently with our project management software.', icon: 'fas fa-project-diagram', link: '#', bgColor: 'bg-gradient-to-r from-green-500 to-green-300 text-white' },
      { title: 'Accounting Management Software', description: 'Manage accounting and financial records with our accounting management software.', icon: 'fas fa-calculator', link: '#', bgColor: 'bg-white' },
      { title: 'Diagnostics Management Software', description: 'Manage diagnostics and lab operations with our management software.', icon: 'fas fa-vials', link: '#', bgColor: 'bg-gradient-to-r from-purple-500 to-purple-300 text-white' },
      { title: 'Manufacturing Management', description: 'Optimize manufacturing processes with our comprehensive management software.', icon: 'fas fa-industry', link: '#', bgColor: 'bg-white' },
    ],
  },
];

const Products = () => {
  const { sectionIndex } = useParams();
  const section = productsData[sectionIndex];

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">{section.sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {section.services.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className={`rounded-lg shadow-lg p-6 ${service.bgColor} transform hover:scale-105 transition-transform`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-bold ml-4">{service.title}</h3>
              </div>
              <p className="mb-4">{service.description}</p>
              <a
                href={service.link}
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                Read More <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;
