// Add this import at the top of PersonalBrandLandingPage.tsx:
// import { motion, useAnimationControls } from 'framer-motion';

// Add these inside the PersonalBrandLandingPage component, after the existing state declarations:
const controls = useAnimationControls();
const [animationProgress, setAnimationProgress] = React.useState(0);

React.useEffect(() => {
  if (!isScrollPaused) {
    controls.start({
      x: [-animationProgress, -(contentItems.length * 352)],
      transition: {
        x: {
          duration: 30 * (1 - animationProgress / (contentItems.length * 352)),
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      }
    });
  } else {
    controls.stop();
  }
}, [isScrollPaused, controls, contentItems.length, animationProgress]);

// Replace the gallery section (lines 226-285) with this:
{/* Auto-scrolling Gallery */}
<div className="relative overflow-hidden">
  <motion.div 
    className="flex space-x-6" 
    animate={controls}
    onUpdate={(latest) => {
      if (latest.x && typeof latest.x === 'number') {
        setAnimationProgress(-latest.x);
      }
    }}
    onMouseEnter={() => setIsScrollPaused(true)} 
    onMouseLeave={() => setIsScrollPaused(false)}
  >
    {/* Duplicate items for seamless loop */}
    {[...contentItems, ...contentItems].map((item, index) => (
      <motion.div 
        key={`${item.id}-${index}`} 
        className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" 
        whileHover={{
          y: -8,
          scale: 1.02
        }} 
        onClick={() => setSelectedProject(item)}
      >
        <div className="relative overflow-hidden rounded-t-2xl">
          <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-emerald-900 mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-emerald-700 leading-relaxed mb-4">
              {item.description}
            </p>
          </div>
          
          <div className="space-y-3 mb-4" style={{display: "none"}}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-emerald-600">Duration</span>
              <span className="text-xs font-semibold text-emerald-800">{item.stats.duration}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-emerald-600">Impact</span>
              <span className="text-xs font-semibold text-emerald-800">{item.stats.impact}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-emerald-600">Satisfaction</span>
              <span className="text-xs font-semibold text-emerald-800">{item.stats.satisfaction}</span>
            </div>
          </div>
          
          <div className="text-center">
            <span className="text-xs font-medium text-emerald-500 group-hover:text-emerald-700 transition-colors">
              Click for details →
            </span>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
  
  {/* Gradient overlays for seamless effect */}
  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-50 to-transparent pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-teal-50/30 to-transparent pointer-events-none" />
</div>