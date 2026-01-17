import React from 'react'

const Features = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <h1 className='text-center'>Features</h1>
    <div className='my-4 grid grid-cols-6 gap-4 max-w-7xl'>
        <div className='w-full h-20 bg-zinc-100 p-4 text-center flex flex-col items-center justify-center  gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#65a21b" d="m68.55 55.14l-6.77 2.04s.43 3.76-.32 9.14c-.75 5.37-2.26 13.97-.75 25.26c1.5 11.29 6.99 17.41 10.86 21.6c1.55 1.68 5.7 4.84 6.45 6.56s2.04 4.19 3.87 4.19s4.62-2.26 5.05-5.7s-5.05-3.01-10.86-9.35c-5.33-5.82-9.24-12.58-10-21.39c-.75-8.81.43-17.3.97-20.64c.54-3.33 1.5-11.71 1.5-11.71m8.48-49.51c2.27-1.13 9.71-2.91 14.65 2.1s3.72 11.25 4.94 12.14c1.21.89 8.66-.57 13.84 4.61s3.64 13.91 1.37 16.1s-24.44-13.51-24.44-13.51zM29.44 19.71s.73-7.36 4.53-11.25c3.4-3.48 8.91-4.86 13.99-2.67c6.56 2.83-7.11 23.63-7.11 23.63L16.41 41.48s-5.75-7.8-.16-15.94c4.77-6.96 13.19-5.83 13.19-5.83M18.76 58.98c-2.35 1.46-7.25 8.49-2.6 15.93c4.05 6.47 9.79 6.31 9.79 6.31S24.49 89.8 30 94.65c5.34 4.71 14.02 3.16 16.53 1.62c2.99-1.83-5.2-26.38-5.2-26.38z"/><path fill="#65a21b" d="M92.32 72.48S73.05 87.21 75.76 91.4c3.05 4.73 14.44 6.53 19.64 2.28c6.23-5.1 4.05-10.28 5.1-11.49s5.83-1.38 8.09-6.23c2.27-4.86 1.78-10.67-1.06-14.15c-2.83-3.48-15.21 10.67-15.21 10.67"/><path fill="#8bc02b" d="M63.18 43.37c3.32-.24 1.59-9.05 1.86-16.11c.45-11.81 3.71-15.71 6.71-18.52c2.85-2.67 7.36-3.96 8.38-4.15c1.6-.29 5.75 2.56 8 7.87c1.93 4.56 1.78 10.3 3.41 11.7s9.18-.99 14.99 4.36s5.77 10.21 5.77 11.29s-3.56 5.5-9.61 7.32c-7.49 2.26-20.61 1.28-24.63 1.2s-7.05.31-6.97 2.09s4.96 1.32 8.91 1.24s13.31 1.01 20.53 4.26c6.97 3.14 8.6 7.63 9.22 10.69c.54 2.67-1.08 6.27-3.87 7.98c-2.79 1.7-8.87 1.55-10.23 3.14c-1.86 2.17.85 8.99-5.5 13.17s-12.42 2.41-13.72 1.31c-4.87-4.14-6.04-9.4-6.97-17.23c-.93-7.82-1.55-16.19-4.96-16.19s-5.19 9.84-6.66 18.28s-5.35 18.24-13.71 20.1c-6.06 1.35-11.7-5.04-12.08-9.41c-.4-4.57.29-9.13-.85-10.81c-1.39-2.05-8.39.02-12.55-6.31c-3.64-5.54-2.09-9.33-1.32-10.34c.74-.96 4.34-5.69 13.4-7.17s26.26 1.12 26.49-2.09s-13.94-2.67-18.59-2.67s-14.27.37-19.06-3.49c-3.64-2.94-4.72-5.9-4.94-6.83c-.35-1.45.63-7.91 5.89-11.12c6.54-4 11.76-1.25 13.31-2.33s-1.24-6.32 3.34-13.01c3.56-5.19 9.71-6.2 10.46-5.89c3.14 1.27 7.03 3.8 9.82 9.45s3.72 12.08 3.72 16.81s-.7 11.6 2.01 11.41"/><path fill="#bdce46" d="M82.84 31.22s2.33-3.96-.51-5.81c-3.29-2.14-5.75 1.31-5.75 1.31s-.38-2.81-3.19-2.84c-2.01-.02-3.13 1.92-3.22 5.27c-.1 3.35.67 4.64 2.3 4.98c2.27.48 3.1-1.5 3.1-1.5s-.03 1.56 1.53 2.65s3.19-.26 3.19-.26s-1.4 2.11-.19 3.42c.99 1.06 2.71.35 2.71.35s-2.91 2.62-1.6 4.37c1.31 1.76 4.09 1.79 5.97 1.28s4.28-2.39 3.83-5.4s-5.24-2.38-5.24-2.38s2.59-3.14 1.12-4.95c-1.72-2.14-4.05-.49-4.05-.49m1.33 24.69c-.51 1.42 1.28 3.17 1.28 3.17s-1.43.08-1.9 1.08s.12 2.4.12 2.4s-2.53-1.51-4.53-.08c-1.78 1.28-1.01 4.18-1.01 4.18s-1.82-2.13-4.18-.89c-1.63.85-1.78 3.91-1.35 6.35s1.94 5.03 4.57 4.53s2.36-5.77 2.36-5.77s3.68 3.74 6.23 1.51c2.13-1.86.5-4.57.5-4.57s1.2.5 2.13-.39s.08-2.32.08-2.32s3.29 1.43 4.03-.89s-1.7-3.48-1.7-3.48s1.59.19 1.39-1.97c-.22-2.37-6.63-6.77-8.02-2.86m-37.15 8.53s1.26-1.23.75-3.89c-.63-3.26-5.14-4.14-6.89-4.01s-3.89.5-3.82 2.95c.05 1.82 1.63 2.26 1.63 2.26s-1.75 1.03-1.25 3.2c.75 3.26 6.02 2.26 6.02 2.26s-3.26 2.82-1.38 5.58s5.45.63 5.45.63s-1.06 2.96 1.07 3.76c2.01.75 3.67-.66 4.89-3.13c1.17-2.37 1.33-6.15-.63-8.02c-2.83-2.72-5.84-1.59-5.84-1.59m-1.3-38.24c-2.6 1.88-1.38 5.51-1.38 5.51s-2.38-.5-3.01 1.19s.94 2.51.94 2.51s-2.32-.56-2.82 1.32s1.19 2.69 1.19 2.69s-2.43.32-2.63 2.88c-.13 1.57 1.25 3.89 5.01 3.95s5.51-.25 5.64-2.07s-1.88-2.69-1.88-2.69s1.64-.31 1.69-2.01c.06-2.26-2.01-3.07-2.01-3.07s2.56 1.26 4.57.19c2.82-1.5 1.5-4.57 1.5-4.57s.94 2.63 3.01 2.26c1.59-.29 2.95-2.13 2.69-5.45s-1.75-4.28-3.32-4.32c-2.07-.06-2.82 2.82-2.82 2.82s-2.73-3.77-6.37-1.14"/></svg>
            <h1>Dermatologically Tested</h1>
        </div>
        <div className='w-full h-20 bg-zinc-100 p-4 text-center flex flex-col  items-center justify-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="#8fbffa" d="M18.707 7.293L12 .586L5.293 7.293a9.485 9.485 0 1 0 13.414 0"/><path fill="#2859c5" fill-rule="evenodd" d="M8 14a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6z" clip-rule="evenodd"/></g></svg>
            <h1>12-Hour Leak Protection</h1>
        </div>
        <div className='w-full h-20 bg-zinc-100 p-4 text-center flex flex-col items-center justify-center  gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle cx="33.75" cy="7.131" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="31.13" cy="11.67" r=".75" fill="currentColor"/><circle cx="40.9" cy="14.269" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="36.361" cy="16.889" r=".75" fill="currentColor"/><circle cx="43.5" cy="24.019" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="38.259" cy="24.019" r=".75" fill="currentColor"/><circle cx="40.888" cy="33.769" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="36.349" cy="31.148" r=".75" fill="currentColor"/><circle cx="33.75" cy="40.906" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="31.13" cy="36.367" r=".75" fill="currentColor"/><circle cx="24" cy="43.5" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="24" cy="38.259" r=".75" fill="currentColor"/><circle cx="14.25" cy="40.906" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="16.87" cy="36.367" r=".75" fill="currentColor"/><circle cx="7.112" cy="33.769" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="11.651" cy="31.148" r=".75" fill="currentColor"/><circle cx="4.5" cy="24.019" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="9.741" cy="24.019" r=".75" fill="currentColor"/><circle cx="7.112" cy="14.269" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="11.651" cy="16.889" r=".75" fill="currentColor"/><circle cx="14.25" cy="7.131" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="16.87" cy="11.67" r=".75" fill="currentColor"/><circle cx="24" cy="4.5" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><circle cx="24" cy="9.741" r=".75" fill="currentColor"/></svg>
            <h1>Breathable Material</h1>
        </div>
        <div className='w-full h-20 bg-zinc-100 p-4 text-center flex flex-col  items-center justify-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#45413c" d="M16.84 44.49a12 1.5 0 1 0 24 0a12 1.5 0 1 0-24 0" opacity="0.15" />
                <path fill="#6dd627" d="M1 7.41a1 1 0 0 1 .57-1c2.87-1.32 15.19-6.26 26.22.82c8.21 5.24 12.67 7.07 14.83 7.71a1 1 0 0 1 .38 1.65C39.68 20 29.65 28.4 16.4 24.47S1.29 10.19 1 7.41" />
                <path fill="#9ceb60" d="M27.79 11.24c6.57 4.21 10.76 6.22 13.28 7.17c.8-.68 1.46-1.31 2-1.82a1 1 0 0 0-.42-1.65c-2.19-.64-6.65-2.47-14.86-7.71C16.76.15 4.44 5.09 1.58 6.41a1 1 0 0 0-.57 1a17 17 0 0 0 .59 3c2.9-1.34 15.18-6.24 26.19.83" />
                <path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M1 7.41a1 1 0 0 1 .57-1c2.87-1.32 15.19-6.26 26.22.82c8.21 5.24 12.67 7.07 14.83 7.71a1 1 0 0 1 .38 1.65C39.68 20 29.65 28.4 16.4 24.47S1.29 10.19 1 7.41" stroke-width="1" />
                <path fill="#6dd627" d="M33.38 32.09A16.2 16.2 0 0 0 26 42.32a1 1 0 0 0 .71 1.16a16.16 16.16 0 0 0 19.84-12.06a1 1 0 0 0-.7-1.16a16.15 16.15 0 0 0-12.47 1.83" />
                <path fill="#9ceb60" d="M26.73 43.48h.13A16.12 16.12 0 0 1 45.72 34a17 17 0 0 0 .83-2.57a1 1 0 0 0-.7-1.16A16.15 16.15 0 0 0 26 42.32a1 1 0 0 0 .73 1.16" />
                <path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M33.38 32.09A16.2 16.2 0 0 0 26 42.32a1 1 0 0 0 .71 1.16a16.16 16.16 0 0 0 19.84-12.06a1 1 0 0 0-.7-1.16a16.15 16.15 0 0 0-12.47 1.83" stroke-width="1" />
                <path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M46.49 30.79a15.4 15.4 0 0 0-11.11 5.38M1.05 7c5.84-.18 13.58 1.21 19 4.49" stroke-width="1" />
            </svg>
            <h1>Eco-Friendly</h1>
        </div>
        <div className='w-full h-20 bg-zinc-100 p-4 text-center flex flex-col items-center justify-center  gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
	<g fill="none">
		<path fill="#d7e0ff" d="M7.36 13.43a1 1 0 0 1-.72 0a9.67 9.67 0 0 1-6.14-9V1.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.92a9.67 9.67 0 0 1-6.14 9.01" />
		<path fill="#fff" d="M2.836 10.73a9.7 9.7 0 0 0 3.804 2.7a1 1 0 0 0 .72 0a9.7 9.7 0 0 0 3.803-2.7A5 5 0 0 0 7 8.5a5 5 0 0 0-4.164 2.23" />
		<path stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M7.36 13.43a1 1 0 0 1-.72 0v0a9.67 9.67 0 0 1-6.14-9V1.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.92a9.67 9.67 0 0 1-6.14 9.01" stroke-width="1" />
		<path stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M2.836 10.73A5 5 0 0 1 7 8.5c1.737 0 3.267.886 4.164 2.23" stroke-width="1" />
		<path fill="#fff" d="M7 7a2.25 2.25 0 1 0 0-4.5A2.25 2.25 0 0 0 7 7" />
		<path stroke="#4147d5" stroke-linecap="round" stroke-linejoin="round" d="M7 7a2.25 2.25 0 1 0 0-4.5A2.25 2.25 0 0 0 7 7" stroke-width="1" />
	</g>
</svg>
            <h1>Rash Protection</h1>
        </div>
        <div className='w-full h-20 bg-zinc-100 p-4 text-center flex flex-col  items-center justify-center gap-2'>
            Hypoallergenic
        </div>

    </div>
    </div>
  )
}

export default Features