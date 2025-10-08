export const fetchNavMetrics = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return {
    jobs: Math.floor(Math.random() * 50),
    performance: Math.floor(Math.random() * 20),
    candidates: Math.floor(Math.random() * 100),
    courses: Math.floor(Math.random() * 10),
  };
}; 