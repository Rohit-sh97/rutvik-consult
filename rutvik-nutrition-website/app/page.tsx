"use client";
import Image from "next/image";
import Link from "next/link";
import PhotoCarousel from "@/components/photocarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Video,
  MapPin,
  Dumbbell,
  Calendar,
} from "lucide-react";

export default function HomePage() {

const handlePayment = async () => {
  // Call backend to create order
  const res = await fetch("https://rutvik-consult-nvi3.vercel.app/api/payment/createOrder", {
    method: "POST",
  });
  const data = await res.json();

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    amount: data.amount,
    currency: data.currency,
    name: "Rutvik Nutrition",
    description: "Book Your Session",
    order_id: data.id,
    handler: function (response: {
      razorpay_payment_id: string;
      razorpay_order_id: string;
      razorpay_signature: string;
    }) {
      alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
    },
    theme: { color: "#22c55e" },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

  return (
    <div className="min-h-screen bg-white">

<section className="bg-gradient-to-br from-green-50 to-white py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Image */}
      <div className="flex justify-center">
        <div className="relative">
          <Image
            src="/detox.jpg" 
            alt="Shamal - Wellness Coach"
            width={400}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Empower Your Wellness with{" "}
          <span className="text-green-500">Shamal</span>
        </h1>
         <p className="text-2xl md:text-4xl text-gray-800 leading-relaxed">
         Detox batch starting soon.
        </p>
        <p className="text-2xl md:text-2xl font-bold text-gray-800 leading-relaxed">
          Get personalized programs with one-on-one consultations, Special offer 3000/-rs course in just 999/-rs
          </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={handlePayment}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
          >
            Book Your Seat
          </Button>
          <Link href="/meet-shamal">
            <Button
              variant="outline"
              size="lg"
              className="border-green-500 text-green-500 hover:bg-green-50 px-8 py-3 text-lg bg-transparent">
              Meet Shamal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


<div>
      <h2 className="text-3xl font-bold text-center mb-8">Real Transformations</h2>
      <PhotoCarousel
        images={[
          "/results/pic 1.jpg",
          "/results/pic 2.jpg",
          "/results/pic 3.jpg",
          "/results/pic 4.jpg",
          "/results/pic 5.jpg",
          "/results/pic 6.jpg",
        ]}
        speed={30}
      />
    </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Health with{" "}
                <span className="text-green-500">Rutvik</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Expert nutrition coaching for weight loss, weight gain, and
                lifestyle transformation. Get personalized programs with online
                video consultations, offline checkups, daily exercise routines,
                and comprehensive nutrition guidance tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handlePayment}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
                >
                  Book Your Session
                </Button>
                <Link href="/meet-rutvik">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-green-500 text-green-500 hover:bg-green-50 px-8 py-3 text-lg bg-transparent"
                  >
                    Meet Rutvik
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/RUTVIKwEB.jpg"
                  alt="Rutvik - Health Nutritionist"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">450+</div>
                    <div className="text-sm">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Health Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From personalized nutrition plans to fitness guidance, get
              everything you need for your health transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <Video className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Online Video Consultations
                </h3>
                <p className="text-gray-600">
                  Convenient virtual sessions from the comfort of your home with
                  personalized guidance
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Offline Checkups</h3>
                <p className="text-gray-600">
                  In-person consultations with detailed health assessments and
                  body composition analysis
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <Dumbbell className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Daily Exercise Plans
                </h3>
                <p className="text-gray-600">
                  Customized workout routines that fit your lifestyle and
                  fitness goals
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Weight Management
                </h3>
                <p className="text-gray-600">
                  Specialized programs for healthy weight loss and weight gain
                  with sustainable results
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Nutrition Coaching
                </h3>
                <p className="text-gray-600">
                  Expert guidance on meal planning, portion control, and healthy
                  eating habits
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Lifestyle Transformation
                </h3>
                <p className="text-gray-600">
                  Complete lifestyle makeover with sustainable habits for
                  long-term health
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their lives
            with Rutvik's expert guidance. Your personalized health plan is just
            one click away.
          </p>
          <Link href="/book-session">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 text-lg"
            >
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
