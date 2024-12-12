import React from 'react';
import '../styles/FounderMessage.css';

function FounderMessage() {
  return (
    <div className="founder-message-container">
      <div className="founder-photo">
        {/* <img src="../src/assets/founder.jpg" alt="Founder" /> */}
      </div>
      <div className="message-content">
        <h1 style={{textAlign:"center", marginBottom:"10px"}}>Our Story</h1>

        <p>I am Dipak Bapu Alhate (<a href='https://www.linkedin.com/in/dipak-alhate-309147136' target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>), a 28-year-old Mechanical Engineer by education and Software Developer by profession and solopreneur by current working status who left job to focus on own startup journey. As an ambitious individual, I've always dreamed of achieving big things and making a significant impact. It is often said that a person’s capabilities are judged by what they accomplish and what they chose to achieve in life. With that in mind, I’ve chosen a challenging and impactful problem to solve—one that can address several pressing societal issues.</p>
        
        <p>I am committed to transforming the way our education system works. There are numerous flaws and opportunities for improvement within the current system. Here are a few major challenges that need to be addressed:</p>

        <h4>Affordability of Quality Education:</h4>
        <p>Quality education is often out of reach for many. Currently, individuals enrolling in junior KG, senior KG, or even primary schools are paying too much fees than they can afford. Education should either be free or available at a minimal cost. The average cost of education from primary school to graduation in India ranges from ₹5 lakh to ₹25 lakh, depending on the curriculum. While government schools provide education at a much lower cost, they often have limited resources, leaving students unprepared for higher education. Limited top college institutes (23 IITs, 21 IIMs, 7 NIPER, etc) results in talent migrating to other countries for better education and resulting in exporting talent than leveraging it in our country.</p>

        <h4>Exam-Centric Education:</h4>
        <p>Our education system, and society at large, places too much emphasis on exams and metrics-based evaluation rather than on providing essential soft skills and experience-based learning. As parents, people often prioritize their children getting jobs over nurturing entrepreneurial ambitions.</p>

        <h4>Lack of Resources in Rural Areas:</h4>
        <p>With 65-68% of India's population residing in rural areas, there is a massive opportunity for development in these regions. I firmly believe that rural areas are home to many talented individuals who could achieve much more if they had access to proper mentorship, infrastructure, and an enabling environment.</p>

        <h4>Social Issues Linked to Education:</h4>
        <p>Most of India’s social issues—such as rapes, poverty, income inequality, caste discrimination, unemployment, corruption, inadequate healthcare, environmental concerns, mental health issues, rising suicides, and crimes—are tied to the quality of education. Many of these challenges stem from individuals being literate rather than well-educated. Literacy alone cannot solve these issues; a deeper, more holistic education is needed for changing mindset of people.</p>

        <p>These are just a few of the challenges, and I have a long list of issues that need to be addressed (which I will share soon). These problems cannot be solved solely by the government or the system. Some of these challenges require all individuals, like us, to contribute with government, to take societal responsibility and take action. Our society can be better with our own collective efforts.</p>

        <p>I strongly believe that as a community, we are failing to make progress in these areas. I have found my life’s purpose in addressing these problems, striving to create something better for society. One day, I am confident that I will overcome these challenges and make a meaningful impact.</p>

        <h4>Vision and Thought Process</h4>
        <p>This is just the beginning. The problem statement may seem overwhelming, and the path to a solution is not easy. But I don't aim to simply "find a solution"; I want to create a thought process; change an individual mindset of achieving big—a way of thinking about how to approach challenges. I call this the <strong>#2f2p thought process</strong> to get better in the following areas: Fitness, Personal, Financial, Professional. Aim to achieve first 2; other 2 will follow you at ease.</p>

        <p>Here’s my first step: I am starting with digital products focused on personal improvement. For big change to happen, we must begin with ourselves first. As the saying goes, "Be the change you want to see in the world," and everything else will follow.</p>

        <p>This is the path I’ve chosen to serve my vision and mission under VDreams—Victories Over Dreams.</p>

        <h4>My Mission:</h4>
        <ul>
          <li>1. Digital Products on personality improvement</li>
          <li>2. Micro-products on Soft Skills and Experience-Based Learning</li>
          <li>3. Entrepreneurship Hub—EntraHub to foster business creation</li>
          <li>4. Micro and Mega Learning Centres providing educational and entrepreneurial facilities with Earn and Learn schemes.</li>
          <li>5. Integrating Everything to drive results; and reduce overall educational cost and reduce societal problems</li>
          <p style={{"text-indent": "0px"}}>Note: This won't be traditional Edtech company focusing on specific courses and providing resources online. Although this will be small part of this journey.</p>
        </ul>

        <p>The journey will not be easy, but it is not impossible. I am committed to making it happen. One day, I’ll look back and say, “I did it—just like that.” Because I am going to make it happen.</p>

        <p>Stay tuned for updates; contribute and join the mission.</p>
      </div>
    </div>
  );
}

export default FounderMessage;
