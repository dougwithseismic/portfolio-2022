import { motion } from 'framer-motion'

export const Corners = ({ title = 'Home' }) => (
  <div id="corners" className="fixed inset-4 pointer-events-none">
    <div
      id="tl__corner"
      className="absolute border-l-2 border-t-2 w-4 h-4 border-white"
    />
    <div
      id="tr__corner"
      className="absolute border-r-2 border-t-2 right-0 w-8 h-4 border-white"
    />
    <div
      id="bl__corner"
      className="absolute border-l-2 border-b-2 bottom-0 w-4 h-8 border-white"
    />
    <div
      id="br__corner"
      className="absolute border-r-2 border-b-2 right-0 bottom-0 w-4 h-8 border-white"
    >
      <div className="liveTag absolute bottom-2 right-4 w-32">
        <div className="liveTag flex justify-end gap-2 items-center">
          <motion.div
            className="liveRound rounded-full h-4 w-4 bg-brightOrange stroke-brightOrange"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
              backgroundColor: '#FF2000',
              transition: {
                repeat: Infinity,
                duration: 2.4,
                ease: 'easeInOut',
              },
            }}
          />
          <strong>LIVE</strong>
        </div>
      </div>
    </div>
  </div>
)
