import React from 'react';

const Section = ({ title, content, imageUrl }) => (
  <div className="card mb-4">
    {imageUrl && <img src={imageUrl} alt={title} className="card-img-top" />}
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{content}</p>
    </div>
  </div>
);

const MyDashboard = () => {
    const eventPhotos = [
        { title: 'Event 1', content: 'Description of Event 1', imageUrl: 'https://via.placeholder.com/400x200' },
        { title: 'Event 2', content: 'Description of Event 2', imageUrl: 'https://via.placeholder.com/400x200' },
      ];
    
      const interestingThings = [
        { title: 'Interesting Thing 1', content: 'Description of Interesting Thing 1' },
        { title: 'Interesting Thing 2', content: 'Description of Interesting Thing 2' },
      ];
    
      const newColleagues = [
        { title: 'New Colleague 1', content: 'Introduction to New Colleague 1' },
        { title: 'New Colleague 2', content: 'Introduction to New Colleague 2' },
      ];
    
      const testimonials = [
        { title: 'Testimonial 1', content: 'Feedback from Client 1' },
        { title: 'Testimonial 2', content: 'Feedback from Client 2' },
      ];
    
      const blogPosts = [
        { title: 'Blog Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imageUrl: 'https://via.placeholder.com/400x200' },
        { title: 'Blog Post 2', content: 'Pellentesque ac felis tellus. Vivamus varius justo non neque scelerisque.', imageUrl: 'https://via.placeholder.com/400x200' },
      ];
    

  return (
    <div className="container mt-4">
      <h1 className="mb-4">My Dashboard</h1>

      <h2 className="mb-3">Event Photos</h2>
      <div className="row">
        {eventPhotos.map((item, index) => (
          <div key={index} className="col-md-4">
            <Section {...item} />
          </div>
        ))}
      </div>

      <h2 className="mb-3">Interesting Things</h2>
      <div className="row">
        {interestingThings.map((item, index) => (
          <div key={index} className="col-md-4">
            <Section {...item} />
          </div>
        ))}
      </div>

      <h2 className="mb-3">New Colleagues</h2>
      <div className="row">
        {newColleagues.map((item, index) => (
          <div key={index} className="col-md-4">
            <Section {...item} />
          </div>
        ))}
      </div>

      <h2 className="mb-3">Testimonials</h2>
      <div className="row">
        {testimonials.map((item, index) => (
          <div key={index} className="col-md-4">
            <Section {...item} />
          </div>
        ))}
      </div>

      <h2 className="mb-3">Blog Posts</h2>
      <div className="row">
        {blogPosts.map((item, index) => (
          <div key={index} className="col-md-4">
            <Section {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDashboard;