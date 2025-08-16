import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, Clock, Heart, Target } from "lucide-react"

export default function MeetShamalPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="text-green-500">Shamal</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Guiding you toward a healthier, stronger, and more confident version of yourself.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <Image
              src="/Shamalpic.jpg"
              alt="Shamal - Wellness Mentor"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Wellness Mentor & Lifestyle Coach</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Shamal is passionate about helping individuals create balance in their lives through mindful nutrition,
              positive habits, and long-term wellness strategies. She has guided many people on their journey to
              achieving healthy lifestyles and lasting confidence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Her approach focuses on empowering you with the right tools and knowledge so that health becomes a
              sustainable lifestyle, not a temporary change. From everyday wellness tips to structured guidance, Shamal
              ensures her clients feel supported every step of the way.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-100 text-green-700 px-3 py-1">Lifestyle Coach</Badge>
              <Badge className="bg-green-100 text-green-700 px-3 py-1">Nutrition Guidance</Badge>
              <Badge className="bg-green-100 text-green-700 px-3 py-1">Wellness Mentor</Badge>
            </div>
          </div>
        </div>

        {/* Skills / Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Wellness Guidance</h3>
                <p className="text-gray-600">
                  Supporting individuals in building a balanced diet and healthier lifestyle habits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Coaching with Care</h3>
                <p className="text-gray-600">
                  Encouraging, guiding, and motivating people to reach their personal health and fitness goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Goal-Oriented Plans</h3>
                <p className="text-gray-600">
                  Creating step-by-step strategies tailored to fit unique goals, preferences, and lifestyle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Shamal */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Shamal?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-100">
              <CardContent className="p-8">
                <Users className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Compassionate Guidance</h3>
                <p className="text-gray-600">
                  Shamal believes in understanding each individual’s journey and offering practical, empathetic support
                  at every stage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-8">
                <Clock className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continuous Motivation</h3>
                <p className="text-gray-600">
                  She provides regular guidance and encouragement to help you stay committed and confident in your
                  progress.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-8">
                <Heart className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Holistic Care</h3>
                <p className="text-gray-600">
                  Her coaching addresses nutrition, exercise, mindset, and daily routines to bring harmony to your life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-8">
                <Target className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Impact</h3>
                <p className="text-gray-600">
                  Clients experience improved energy, confidence, and well-being with her structured yet flexible
                  approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-green-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">300+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">3+</div>
              <div className="text-gray-600">Years of Coaching</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">90%</div>
              <div className="text-gray-600">Positive Feedback</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
