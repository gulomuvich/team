import "./BlogEmail.css";
import NewsletterImg from "../../assets/img/illustration (6).png";

function BlogEmail() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-left">
          <img src={NewsletterImg} alt="newsletter" />
        </div>

        <div className="newsletter-right">
          <h2>Want to get the best articles weekly?</h2>
          <h3>Subscribe to our newsletter!</h3>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your working email"
            />
            <button>Subscribe</button>
          </div>

          <label className="checkbox">
            <input type="checkbox" />
            <span>
              I agree to receive communications from Createx Online School
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default BlogEmail;