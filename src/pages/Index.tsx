
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RecentPosts from '@/components/RecentPosts';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <RecentPosts />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
