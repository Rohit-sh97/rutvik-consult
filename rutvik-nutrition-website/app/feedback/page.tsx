import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function FeedbackPage() {
  const testimonials = [
    {
    id: 1,
    name: "Anjali Patil",
    image: "/placeholder.svg?height=80&width=80",
    genre: "Weight Loss",
    date: "June 2024",
    rating: 5,
    review: "रुतविक सरांनी खूप मार्गदर्शन केलं, योग्य आहार आणि व्यायामामुळे माझं वजन कमी झालं.",
    struggle: "Overweight"
  },
  {
    id: 2,
    name: "Siddharth Jadhav",
    image: "/placeholder.svg?height=80&width=80",
    genre: "Fitness",
    date: "July 2024",
    rating: 5,
    review: "रुतविक मुळे माझा आत्मविश्वास वाढला आणि शरीर चांगल्या फिटनेसमध्ये आलं.",
    struggle: "Lack of confidence"
  },
  {
    id: 3,
    name: "Priya Verma",
    image: "/placeholder.svg?height=80&width=80",
    genre: "Wellness",
    date: "August 2024",
    rating: 5,
    review: "Rutvik’s guidance helped me understand healthy eating habits. I feel more energetic now.",
    struggle: "Poor diet"
  },
  {
    id: 4,
    name: "Rohan Mehta",
    image: "/placeholder.svg?height=80&width=80",
    genre: "Weight Gain",
    date: "September 2024",
    rating: 5,
    review: "I gained healthy weight in a structured way with Rutvik’s support. Very happy with the results!",
    struggle: "Underweight"
  },
  {
    id: 5,
    name: "Neha Agarawal",
    image: "/placeholder.svg?height=80&width=80",
    genre: "Weight Loss",
    date: "October 2024",
    rating: 5,
    review: "Rutvik ne mere bohot help kari thi mere weight loss main, easy diet aur exercise follow karne ko bola.",
    struggle: "Obesity"
  },
    {
      id: 6,
      name: "Vikram Singh",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      review:
        "Rutvik's nutrition plans are scientifically sound and easy to follow. As an athlete, I needed specific guidance for performance nutrition, and he delivered exactly what I needed.",
      program: "3-Month Transformation",
    },
    {
      id: 7,
      name: "Anita Gupta",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      review:
        "At 45, I thought it was too late to change my health. Rutvik proved me wrong! His holistic approach addressed not just my diet but my entire lifestyle. I feel 10 years younger!",
      program: "6-Month Complete Program",
    },
    {
      id: 8,
      name: "Rahul Joshi",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      review:
        "Being a busy professional, I needed a nutrition plan that fit my hectic schedule. Rutvik created meal plans that were quick, healthy, and delicious. Lost 12 kg without feeling deprived!",
      program: "3-Month Transformation",
    },
    {
      id: 9,
      name: "Shlipa Morey",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      review:
        "As a new mother, I was struggling with post-pregnancy weight. Rutvik's gentle approach and understanding of my situation helped me regain my confidence and health safely.",
      program: "6-Month Complete Program",
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-green-500">Success Stories</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real transformations from real people. See what our clients have to say about their health journey with
            Rutvik's expert guidance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="bg-green-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-500 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-500 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-500 mb-2">4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-green-100 hover:border-green-300 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex gap-1 mt-1">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.review}"</p>

                <div className="text-sm text-green-600 font-medium">{testimonial.program}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-green-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their lives with Rutvik's expert guidance. Your
            journey to better health starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-session"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
            >
              Book Your Consultation
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-green-500 border border-green-500 hover:bg-green-50 rounded-lg transition-colors"
            >
              View Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
