const { Swiper, SwiperSlide } = require("swiper/react");



<Swiper
  // MODULES: Add the necessary modules to enable specific features in your swiper.
  modules={[
    Autoplay, // Enables autoplay to automatically transition slides
    EffectFade, // Enables fade effect transition between slides
    Navigation, // Adds navigation buttons (next/prev)
    Pagination, // Adds pagination dots to navigate between slides
    Mousewheel, // Enables mousewheel scrolling for slide navigation
    Zoom, // Adds zoom functionality on slides
    Keyboard, // Allows slide navigation with keyboard (left/right arrow keys)
    Scrollbar, // Adds a draggable scrollbar to navigate between slides
    Lazy, // Enables lazy loading of images
    Thumbs, // Synchronizes a main swiper with a thumbnail swiper
  ]}
  
  // EFFECT: Controls the transition effect between slides.
  effect="slide" // Default sliding transition effect
  // Possible effects: "slide", "fade", "cube", "coverflow", "flip"
  
  // Basic Swiper Settings
  spaceBetween={5} // Space between slides in pixels
  slidesPerView={1} // Number of slides visible at a time
  loop={true} // Enables infinite looping of slides (goes back to the first slide after the last)
  
  // AUTOPLAY settings
  autoplay={{ 
    delay: 3000, // Autoplay delay in milliseconds (3 seconds)
    disableOnInteraction: false, // Keeps autoplay active even if the user interacts with the swiper
  }}
  
  // PAGINATION settings (dots for navigation)
  pagination={{
    clickable: true, // Makes the pagination dots clickable to jump to specific slides
  }}
  
  // NAVIGATION settings (buttons for next/prev)
  navigation={{
    nextEl: ".swiper-button-next", // Class for the next slide button
    prevEl: ".swiper-button-prev", // Class for the previous slide button
  }}
  
  // MOUSEWHEEL navigation settings
  mousewheel={{
    forceToAxis: true, // Ensures scrolling is only along the main axis (horizontal/vertical)
  }}
  
  // ZOOM functionality
  zoom={true} // Enables zoom on slides (useful for images)
  
  // KEYBOARD control for slide navigation (left and right arrows)
  keyboard={{
    enabled: true, // Enable keyboard navigation
    onlyInViewport: false, // Allows navigation even when the swiper is out of the viewport
  }}
  
  // SCROLLBAR settings
  scrollbar={{
    draggable: true, // Makes the scrollbar draggable
  }}
  
  // LAZY loading of images
  lazy={{
    loadPrevNext: true, // Lazy load the next and previous slides as they come into view
  }}
  
  // THUMBS for syncing with a main swiper
  thumbs={{
    swiper: thumbsSwiper, // Link to the thumbnail swiper instance for synchronization
  }}

  // BREAKPOINTS: Configure different slide behaviors at different screen sizes.
  breakpoints={{
    640: { slidesPerView: 2, spaceBetween: 15 }, // 2 slides at 640px and above
    1024: { slidesPerView: 4, spaceBetween: 20 }, // 4 slides at 1024px and above
  }}

  // On SLIDE CHANGE event listener
  onSlideChange={(swiper) => console.log('Slide changed to', swiper.activeIndex)} // Logs the active slide index
  
  // Additional style and behavior options can be added based on your design needs
>
  {/* Swiper slides */}
  <SwiperSlide>Slide 1 Content</SwiperSlide>
  <SwiperSlide>Slide 2 Content</SwiperSlide>
  <SwiperSlide>Slide 3 Content</SwiperSlide>
</Swiper>


/***
 * 
 * Available Options and Functionalities:
1. Modules:

Modules control Swiper's additional functionalities. You can choose which ones to include:

Autoplay: Automatically transitions slides after a specified delay.

EffectFade: Fades between slides.

Navigation: Adds next/previous buttons for slide navigation.

Pagination: Adds clickable dots for navigating slides.

Mousewheel: Enables mouse wheel scrolling for slide navigation.

Zoom: Enables zooming functionality on slides (typically for image slides).

Keyboard: Allows keyboard navigation (arrow keys) for slide transitions.

Scrollbar: Adds a draggable scrollbar to navigate between slides.

Lazy: Loads images only when they come into view (useful for performance with large image galleries).

Thumbs: Syncs a main swiper with a thumbnail swiper (great for galleries).

2. Effects (effect):

The effect controls the type of transition between slides.

slide: Default sliding transition.

fade: Fades the slides in/out.

cube: 3D cube effect where the slides rotate in a cube-like manner.

coverflow: 3D coverflow effect, where the slides are shown in a 3D space.

flip: 3D flip effect between slides (like flipping a card).

3. Basic Settings:

spaceBetween: Specifies the space (in pixels) between the slides.

slidesPerView: Controls how many slides are visible at the same time.

loop: Enables infinite looping (when you reach the last slide, it returns to the first slide).

autoplay: Configures autoplay settings (like the delay and whether interaction pauses it).

4. Pagination:

clickable: Makes the pagination dots clickable, allowing you to jump to a specific slide.

5. Navigation:

nextEl and prevEl: Specify the classes for next and previous slide buttons (customizable).

6. Mousewheel:

forceToAxis: Ensures that scrolling only happens along the main axis (horizontal or vertical).

7. Zoom:

zoom: Enables zoom on slides, often useful for image galleries.

8. Keyboard:

enabled: Enables keyboard navigation (left and right arrow keys).

onlyInViewport: If set to false, you can navigate even when the swiper is out of the viewport.

9. Scrollbar:

draggable: Makes the scrollbar draggable to navigate between slides.

10. Lazy Loading:

loadPrevNext: Enables lazy loading for the next and previous slides, improving performance.

11. Thumbnails:

swiper: Syncs a thumbnail swiper with the main swiper (useful for image galleries).

12. Breakpoints:

Allows you to set different configurations for various screen sizes:

breakpoints={{
  640: { slidesPerView: 2, spaceBetween: 15 },
  1024: { slidesPerView: 4, spaceBetween: 20 },
}}


This allows you to make your swiper responsive, changing the number of visible slides and the space between them based on the screen width.

13. On Slide Change:

onSlideChange: A callback function that runs when the slide changes. It allows you to log or perform an action when a slide change occurs.
 */
/**
 * Summary of Available Functionalities:

Autoplay: Automatically advances the slides.

Effect: Multiple effects like slide, fade, cube, coverflow, and flip.

Navigation: Next/previous buttons for slide navigation.

Pagination: Clickable dots to jump to specific slides.

Mousewheel: Navigate using the mouse wheel.

Zoom: Zoom functionality on slides.

Keyboard: Allows navigation with keyboard arrow keys.

Scrollbar: Draggable scrollbar to navigate through slides.

Lazy Loading: Improves performance by loading slides only when they are in view.

Thumbs: Synchronize a main swiper with thumbnail slides.

Breakpoints: Configure different behavior for different screen sizes.

Slide Change: Event listener to detect slide changes.
 */