import React from 'react';
import blog from '../../assets/png/blog.png'
import useTitle from '../../hooks/useTitle';

const Blog = () => {
	useTitle("Blog")
    return (
        <div className="hero w-full bg-mybg">
      <div className="hero-content grid md:grid-cols-2 gap-20 my-10 flex-col lg:flex-row">
        <div className="text-center lg:text-left bg-mybg">
          <img className="w-3/4" src={blog} alt="" />
        </div>
        <section className="text-myprimary">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl font-custom1">Let's answer some interview questions while having snacks!</h2>
		<p className="mt-4 mb-8 dark:text-gray-400"></p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none font-custom1  focus-visible:ring-violet-400">Difference between SQL and NoSQL</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 font-bold text-sm dark:text-gray-400">LSQL (Structured Query Language) and NoSQL are two different types of databases that are used to store and manage data. SQL databases are based on a structured query language and are designed to store and manage large amounts of data in a structured format, such as rows and columns. They are typically used for applications that require complex queries and transactions, such as e-commerce websites or financial systems. NoSQL databases, on the other hand, are designed to handle large amounts of data that may be unstructured or semi-structured. They are often used for applications that require fast read and write speeds, such as social media platforms or online gaming. NoSQL databases do not use SQL and are generally more flexible and scalable than SQL databases </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none font-custom1 focus-visible:ring-violet-400">What is JWT Token and how does it work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 font-bold text-sm dark:text-gray-400">A JSON Web Token (JWT) is a JSON-based open standard that is used to securely transmit information between parties. It is often used to authenticate users and ensure that the transmitted data is secure. JWTs consist of three parts: a header, a payload, and a signature. The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. The payload contains the claims, which are statements about an entity (typically, the user) and additional data. The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. JWTs are compact and self-contained, allowing them to be transmitted easily and securely. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none font-custom1 focus-visible:ring-violet-400">What is the difference between javascript and NodeJS?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 font-bold text-sm dark:text-gray-400">JavaScript is a programming language that is commonly used for web development and is supported by most web browsers. NodeJS is a JavaScript runtime that is built on Chrome's V8 JavaScript engine and allows developers to run JavaScript on the server side. NodeJS allows developers to use JavaScript for server-side scripting, which can help to build scalable network applications. It is an open-source and cross-platform runtime environment that is used to run JavaScript code outside of a web browser. In short, JavaScript is a programming language, while NodeJS is a runtime environment that allows developers to run JavaScript on the server side. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none font-custom1 focus-visible:ring-violet-400">How does NodeJS handle multiple requests at the same time?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 font-bold text-sm dark:text-gray-400">NodeJS uses an event-driven, non-blocking I/O model to handle multiple requests concurrently. When a request is made, it is added to an event queue and then processed asynchronously by an event loop. This allows NodeJS to handle multiple requests concurrently without blocking or waiting for the previous request to finish. As a result, NodeJS is able to handle a large number of requests quickly and efficiently, making it well-suited for building scalable, high-performance network applications. </p>
			</details>
		</div>
	</div>
</section>
      </div>
    </div>
    );
};

export default Blog;