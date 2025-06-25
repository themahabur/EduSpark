import React from "react";

const FAQSection = () => {
  return (
    <div className="my-8" data-aos="fade-up">
      <div className="my-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Frequently Asked Questions
        </h2>
      </div>
      <div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            Who can provide services on EduSpark?
          </div>
          <div className="collapse-content text-sm">
            Anyone with teaching experience or knowledge in any subject can
            register and offer their services on EduSpark.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Is EduSpark a course-selling platform?
          </div>
          <div className="collapse-content text-sm">
            No, EduSpark is not a course-selling platform. It’s a service
            marketplace where anyone can offer educational services like private
            tutoring, assignment help, or exam preparation.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How do I contact a service provider?
          </div>
          <div className="collapse-content text-sm">
            After logging in, you can view service details and directly contact
            the service provider through their listed profile.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Is there any fee to join EduSpark?
          </div>
          <div className="collapse-content text-sm">
            No, creating an account and browsing services is completely free for
            all users.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How are the service providers verified?
          </div>
          <div className="collapse-content text-sm">
            Service providers sign in using verified email via Firebase, and we
            encourage users to review and rate them based on experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
