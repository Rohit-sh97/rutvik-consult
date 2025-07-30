import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Users, Clock, Heart, Target } from "lucide-react"

export default function MeetRutvikPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="text-green-500">Rutvik</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your dedicated partner in achieving optimal health and wellness
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <Image
              src="/RUTVIKweB.jpg"
              alt="Rutvik - Certified Nutritionist"
              width={500}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Nutrition Expert & Wellness Coach</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 4 years of experience in nutrition science and wellness coaching, Rutvik has helped over 500
              individuals achieve their health goals through personalized nutrition plans and lifestyle modifications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              His approach combines evidence-based nutrition science with practical, sustainable lifestyle changes that
              fit into your daily routine. Whether you're looking to lose weight, gain muscle, or simply improve your
              overall health, Rutvik provides the expertise and support you need.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-green-100 text-green-700 px-3 py-1">Weight Management Specialist</Badge>
              <Badge className="bg-green-100 text-green-700 px-3 py-1">Nutritionist</Badge>
              <Badge className="bg-green-100 text-green-700 px-3 py-1">Fitness Coach</Badge>
            </div>
          </div>
        </div>

        {/* Experience / Expertise */}
<div className="mb-20">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
    Skills & Expertise
  </h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <Card className="border-green-100">
      <CardContent className="p-6 text-center">
        <GraduationCap className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">
          Health & Nutrition Guidance
        </h3>
        <p className="text-gray-600">
          Practical knowledge of balanced diet planning and healthy lifestyle coaching
        </p>
      </CardContent>
    </Card>

    <Card className="border-green-100">
      <CardContent className="p-6 text-center">
        <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">
          Hands-On Coaching
        </h3>
        <p className="text-gray-600">
          Guided many individuals on their weight loss, gain, and fitness journey through structured programs
        </p>
      </CardContent>
    </Card>

    <Card className="border-green-100">
      <CardContent className="p-6 text-center">
        <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">
          Personalized Approach
        </h3>
        <p className="text-gray-600">
          Tailored meal planning, exercise strategies, and motivation to fit unique goals
        </p>
      </CardContent>
    </Card>
  </div>
</div>

        {/* Why Choose Rutvik */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Rutvik?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-100">
              <CardContent className="p-8">
                <Users className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
                <p className="text-gray-600">
                  Every client receives a customized nutrition and fitness plan based on their unique body type,
                  lifestyle, preferences, and health goals. No one-size-fits-all solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-8">
                <Clock className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                <p className="text-gray-600">
                  Regular check-ins, progress monitoring, and plan adjustments ensure you stay on track. Available for
                  questions and guidance throughout your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-8">
                <Heart className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Holistic Wellness</h3>
                <p className="text-gray-600">
                  Focus on overall well-being, not just weight. Addresses nutrition, exercise, sleep, stress management,
                  and lifestyle factors for complete health transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardContent className="p-8">
                <Target className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of helping clients achieve sustainable weight loss, muscle gain, improved energy levels,
                  and better overall health with lasting lifestyle changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-green-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
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
