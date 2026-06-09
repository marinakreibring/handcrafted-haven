export default function SellerFormPage() {
  return (
    <main>
        <h3 className="section-title">Join Our Artisan Community</h3>
        <p className="section-description">
            Are you a passionate artisan or maker? We'd love to learn more about you 
            and your craft. Complete the form below and tell us your story.
        </p>

        <form className="seller-form">

            <input
                type="text"
                placeholder="Full Name"
            />

            <input
                type="email"
                placeholder="Email"
            />

            <input
                type="text"
                placeholder="Craft Type"
            />

            <input
                type="text"
                placeholder="Location"
            />

            <textarea
                placeholder="Tell us about yourself"
                rows={3}
            />

            <button type="submit">
                Submit Application
            </button>

        </form>
    </main>
  );
}