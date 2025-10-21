
import { motion } from 'motion/react';

<motion.div
  // Animation Options: Basic animations for transforming or modifying the element.
  initial={{ opacity: 0 }} // The initial state of the element (e.g., opacity, x, y, etc.)
  animate={{ opacity: 1 }} // The final state of the element to animate to
  exit={{ opacity: 0 }} // The state to animate to when the element is removed (exit animations)
  transition={{
    duration: 0.5, // Duration of the animation (in seconds)
    ease: "easeInOut", // Easing function for smoother animation (e.g., easeInOut, linear, cubicBezier)
  }}
  
  // Dragging Options: Enable drag functionality.
  drag="x" // Enable horizontal drag (use "y" for vertical drag, "both" for both axes)
  dragConstraints={{ left: 0, right: 300 }} // Set drag limits to constrain the element's movement
  
  // Hover and Tap Gestures: Add hover and tap animations.
  whileHover={{ scale: 1.1 }} // When hovered, increase the size of the element by 10%
  whileTap={{ scale: 0.9 }} // When tapped, shrink the element by 10%

  // Variants: Define animation states and transitions for more complex animations.
  variants={{
    hidden: { opacity: 0, x: -100 }, // The 'hidden' variant state (e.g., off-screen)
    visible: { opacity: 1, x: 0 }, // The 'visible' variant state (e.g., element visible in place)
  }}
  initial="hidden" // Initial variant state (element starts off-screen)
  animate="visible" // Final variant state (element moves to the visible position)
  exit="hidden" // Exit variant state (when the element exits)
  
  // Layout Animations: Enable smooth layout transitions when elements change position or size.
  layout // Automatically animates when an element’s layout changes (e.g., size or position)

  // Keyframes: Define custom keyframe animations.
  animate={{
    x: [0, 100, 200], // Keyframes for horizontal movement (move from 0 -> 100 -> 200)
    opacity: [0, 1, 0], // Keyframes for opacity (fade in and fade out)
  }}
  transition={{
    duration: 2, // Duration of the animation (in seconds)
    ease: "easeInOut",
    times: [0, 0.5, 1], // Times for the keyframe values
  }}

  // Motion Path: Animate along a path (e.g., SVG path).
  pathLength={1} // Specify the length of the path
  style={{ pathLength: 1 }}
  animate={{
    pathLength: 0, // Animate the path length from 0 to 1
    pathOffset: 0, // Control the offset of the path animation
  }}

  // Drag Events: Define the drag behavior and controls.
  dragControls // Enables drag controls for programmatically controlling drag behavior
  dragElastic={0.3} // Sets elasticity when the user drags an element (higher value = more resistance)

  // Scroll Animations: Animate based on the user's scroll position.
  whileInView={{ opacity: 1 }} // Animation when the element is in view
  viewport={{ once: true }} // Trigger the animation only once when the element comes into view

  // Custom Transitions: Customize the transition timing and behaviors.
  transition={{
    type: "spring", // Transition type (spring, tween, or inertia)
    stiffness: 300, // Stiffness of the spring (higher = stiffer)
    damping: 25, // Damping of the spring (higher = slower)
    duration: 1, // Duration of the animation (in seconds)
  }}
>
  {/* Your component content */}
  <div>Animated content here</div>
</motion.div>



<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{
    duration: 0.5,
    ease: "easeInOut",
  }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  variants={{
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }}
  initial="hidden"
  animate="visible"
  exit="hidden"
  drag="x"
  dragConstraints={{ left: 0, right: 300 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 25,
  }}
  layout
>
  <div>Content</div>
</motion.div>


/**
 * Summary of Available Functionalities:

Animation Control: initial, animate, exit, transition

Gesture Animations: whileHover, whileTap, whileDrag

Variants: Define multiple states for more complex animations

Keyframes: Animate elements through multiple keyframes

Path Animations: Animate along paths (SVG paths)

Layout Animations: Smooth transitions for layout changes

Scroll Animations: Trigger animations based on scroll position

Custom Transitions: Customize spring, tween, and inertia transitions

Drag: Enable draggable behavior with constraints

Viewport: Trigger animations on entering the viewport

This should provide a comprehensive overview of Motion.dev (formerly known as Framer Motion). Let me know if you need further clarification or examples!
 */