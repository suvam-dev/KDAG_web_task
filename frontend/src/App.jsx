import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/ui/ParticleBackground';
import './App.css';
import Card from './components/ui/cards';

const BlogData = [
  {
    "id": 1,
    "title": "Mastering Quantitative Finance: A Data-Driven Approach",
    "date": "10/12/2023",
    "likes": "12k",
    "description": "Algorithmic trading is rapidly evolving. Discover how predictive modeling and stochastic calculus are reshaping quantitative finance strategies in modern markets...",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Stock market trading graphs on screens"
  },
  {
    "id": 2,
    "title": "Demystifying Transformers in Natural Language Processing",
    "date": "02/15/2024",
    "likes": "8.5k",
    "description": "From BERT to GPT-4, transformer architectures have revolutionized NLP. Let's break down self-attention mechanisms and how they process contextual data...",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Abstract artificial intelligence network nodes"
  },
  {
    "id": 3,
    "title": "Winning Kaggle: Tips from KDAG Grandmasters",
    "date": "03/22/2024",
    "likes": "15k",
    "description": "Competing on Kaggle requires more than just calling model.fit(). Learn advanced feature engineering and cross-validation techniques from top IIT KGP competitors...",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Data scientist analyzing code on multiple monitors"
  },
  {
    "id": 4,
    "title": "Time Series Forecasting for Supply Chain Optimization",
    "date": "04/05/2024",
    "likes": "6.2k",
    "description": "Accurate demand forecasting is critical for logistics. We explore ARIMA, Prophet, and LSTM networks to predict supply chain bottlenecks efficiently...",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Shipping containers stacked in a port terminal"
  },
  {
    "id": 5,
    "title": "Building Scalable Data Pipelines with Apache Kafka",
    "date": "05/18/2024",
    "likes": "9.1k",
    "description": "Real-time data streaming is the backbone of modern analytics. Here is a comprehensive guide to setting up robust event-driven pipelines using Apache Kafka...",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Server racks in a modern data center"
  },
  {
    "id": 6,
    "title": "Computer Vision: Edge Detection to Instance Segmentation",
    "date": "06/10/2024",
    "likes": "11k",
    "description": "Tracking the evolution of computer vision. We analyze the shift from traditional OpenCV techniques to state-of-the-art CNNs and Mask R-CNN architectures...",
    "image": "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Robotic eye visualizing digital data"
  },
  {
    "id": 7,
    "title": "Reinforcement Learning in Game AI",
    "date": "07/28/2024",
    "likes": "14k",
    "description": "How do AI agents learn to beat human champions? Dive into Q-learning, Policy Gradients, and the mechanics behind deep reinforcement learning algorithms...",
    "image": "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Futuristic data tunnel"
  },
  {
    "id": 8,
    "title": "The Ethics of Generative AI and Deepfakes",
    "date": "08/14/2024",
    "likes": "7.8k",
    "description": "With the rise of Generative Adversarial Networks (GANs), distinguishing fact from fiction is harder than ever. Exploring the ethical boundaries of AI...",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Abstract representation of artificial intelligence mind"
  },
  {
    "id": 9,
    "title": "KDAG Data Hackathon 2024: A Retrospective",
    "date": "09/02/2024",
    "likes": "20k",
    "description": "Over 500 students, 48 hours, and terabytes of data. We review the winning solutions, innovative approaches, and major takeaways from this year's flagship hackathon...",
    "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Group of students coding together at a hackathon"
  },
  {
    "id": 10,
    "title": "Graph Neural Networks: Analyzing Social Connections",
    "date": "11/01/2024",
    "likes": "10k",
    "description": "Data is the new currency of the digital age. Data insights hold the key to unlocking new business potentials. Learn how GNNs map complex social relationships...",
    "image": "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    "imageAlt": "Abstract network visualization connecting dots"
  }
]
function App() {
  return (
    <>
      {/* Native canvas — position:fixed, z:-1, pointer-events:none */}
      <ParticleBackground />

      <div className="p-1 h-40">   <Navbar /></div>


      {/* Main hero: position:static normal flow → above z:-1 by CSS spec */}
      <main className="flex flex-col justify-center items-center">
        <div className='mt-6 font-sans font-extrabold text-4xl mb-4 text-white'>Blog Page</div>
        <div className='text-xl mb-4 font-sans text-white'>Explore the world of Machine Learrning and AI with KDAG</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-transparent m-10">
          {BlogData.map((data) => (
            <Card key={data.id}
              cardDetails={data}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
