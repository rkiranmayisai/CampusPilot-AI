// CampusPilot AI - Skill Gap Analyzer & 7-Day Action Planner Engine

function generateSkillGapPlan(targetSkill, opportunityTitle = "Target Opportunity") {
  const cleanSkill = targetSkill ? targetSkill.trim() : "TensorFlow";

  const default7DayPlans = {
    "TensorFlow": [
      { day: 1, title: "TensorFlow & Keras Core Architecture", description: "Understand Tensors, computational graphs, and Sequential API setup.", resource: "TensorFlow Official 101 Docs", estTime: "45 mins" },
      { day: 2, title: "Building Neural Networks & Activation Functions", description: "Implement Dense layers, ReLU, Sigmoid, and Loss Functions.", resource: "Keras Quickstart Guide", estTime: "60 mins" },
      { day: 3, title: "Data Pipelines with tf.data", description: "Learn batching, shuffling, mapping, and dataset preprocessing.", resource: "tf.data Input Pipelines Tutorial", estTime: "50 mins" },
      { day: 4, title: "Convolutional Neural Networks (CNNs)", description: "Build image classification models with Conv2D and MaxPooling.", resource: "DeepLearning.AI CNN Crash Course", estTime: "90 mins" },
      { day: 5, title: "Transfer Learning & Fine-Tuning", description: "Leverage pretrained MobileNet/ResNet models for high accuracy.", resource: "TF Hub Pretrained Models Guide", estTime: "75 mins" },
      { day: 6, title: "Model Optimization & TFLite", description: "Quantize models for high-efficiency mobile/edge deployment.", resource: "TFLite Edge Optimization", estTime: "60 mins" },
      { day: 7, title: "Capstone Project: Deploy Image Classifier API", description: "Build and deploy a mini AI vision service using Flask/FastAPI + TensorFlow.", resource: "GitHub Capstone Template", estTime: "120 mins" }
    ],
    "PyTorch": [
      { day: 1, title: "PyTorch Tensors & Autograd Engine", description: "Master tensor operations, CUDA GPU acceleration, and automatic differentiation.", resource: "PyTorch 60min Blitz", estTime: "45 mins" },
      { day: 2, title: "nn.Module & Custom Neural Networks", description: "Define custom forward pass, linear layers, and weight initialization.", resource: "PyTorch nn Module Deep Dive", estTime: "60 mins" },
      { day: 3, title: "Training Loops & Optimizers", description: "Implement SGD, AdamW, zero_grad(), loss.backward(), and step().", resource: "PyTorch Training Best Practices", estTime: "50 mins" },
      { day: 4, title: "Custom Datasets & DataLoaders", description: "Override __getitem__ and __len__ for efficient multi-threaded data loading.", resource: "PyTorch Data Loading Tutorial", estTime: "70 mins" },
      { day: 5, title: "Vision Transformers & Hugging Face", description: "Fine-tune pretrained ViT models for vision tasks.", resource: "HuggingFace Transformers Docs", estTime: "90 mins" },
      { day: 6, title: "Model Export & ONNX Runtime", description: "Convert PyTorch models to ONNX format for ultra-fast production inference.", resource: "PyTorch ONNX Export Guide", estTime: "60 mins" },
      { day: 7, title: "Capstone: Multimodal Classifier", description: "Build a hybrid image-text classifier and host on HuggingFace Spaces.", resource: "HF Spaces Deployment Blueprint", estTime: "110 mins" }
    ],
    "System Design": [
      { day: 1, title: "Fundamentals: Scalability & Load Balancing", description: "Understand Horizontal vs Vertical Scaling, Nginx, and Round-Robin routing.", resource: "Grokking System Design Primer", estTime: "50 mins" },
      { day: 2, title: "Database Sharding & Caching Strategies", description: "Implement Redis caching patterns (Cache-Aside, Write-Through) and RDBMS sharding.", resource: "Redis Architecture & Caching", estTime: "60 mins" },
      { day: 3, title: "Message Queues & Event-Driven Systems", description: "Explore Kafka/RabbitMQ for async processing, rate limiting, and pub/sub.", resource: "Apache Kafka Core Concepts", estTime: "75 mins" },
      { day: 4, title: "API Gateway & Microservices Architecture", description: "Design Auth token validation, circuit breakers, and gRPC RPC calls.", resource: "Microservices Pattern Handbook", estTime: "80 mins" },
      { day: 5, title: "CAP Theorem & Distributed Consensus", description: "Analyze Consistency vs Availability trade-offs in distributed NoSQL DBs.", resource: "Distributed Systems Notes", estTime: "60 mins" },
      { day: 6, title: "Designing URL Shortener / Rate Limiter", description: "Practice mock system design questions step-by-step.", resource: "ByteByteGo System Design", estTime: "90 mins" },
      { day: 7, title: "Mock Interview Practice: Design WhatsApp/Uber", description: "Complete a full 45-minute whiteboard system design exercise.", resource: "Interactive System Design Sandbox", estTime: "90 mins" }
    ]
  };

  const planKey = Object.keys(default7DayPlans).find(k => k.toLowerCase() === cleanSkill.toLowerCase()) || "TensorFlow";
  const days = default7DayPlans[planKey] || default7DayPlans["TensorFlow"];

  return {
    targetSkill: cleanSkill,
    opportunityTitle,
    totalDays: 7,
    estimatedTotalHours: "8.5 Hours",
    days: days.map(d => ({ ...d, completed: false }))
  };
}

if (typeof window !== 'undefined') {
  window.CampusPilotServices = window.CampusPilotServices || {};
  window.CampusPilotServices.generateSkillGapPlan = generateSkillGapPlan;
}

