"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle } from "lucide-react"

export default function BookSessionPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    city: "",
    sessionType: "",
    problem: "",
    goals: "",
    contactTime: "",
  })

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/form/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      setIsSubmitted(true);
    } else {
      alert("Failed to submit. Try again.");
    }
  } catch (err) {
    console.error(err);
    alert("Error submitting form.");
  }
};


  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white py-20 px-4 flex items-center justify-center">
        <Card className="max-w-md w-full border-green-200">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! Rutvik will contact you within 24 hours to schedule your consultation.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-green-500 hover:bg-green-600 text-white">
              Book Another Session
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-green-500">Session</span>
          </h1>
          <p className="text-lg text-gray-600">
            Take the first step towards your health transformation. Fill out the form below and Rutvik will contact you
            to schedule your consultation.
          </p>
        </div>

        <Card className="border-green-100 shadow-lg">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-2xl text-center text-gray-900">Consultation Booking Form</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => handleInputChange("mobile", e.target.value)}
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    required
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="border-green-200 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Session Preferences */}
              <div className="space-y-2">
                <Label>Preferred Session Type *</Label>
                <Select onValueChange={(value) => handleInputChange("sessionType", value)}>
                  <SelectTrigger className="border-green-200 focus:border-green-500">
                    <SelectValue placeholder="Select session type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online Video Call</SelectItem>
                    <SelectItem value="offline">Offline In-Person</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem">Problem Description *</Label>
                <Textarea
                  id="problem"
                  required
                  placeholder="Please describe your current health concerns, challenges, or what you'd like to improve..."
                  value={formData.problem}
                  onChange={(e) => handleInputChange("problem", e.target.value)}
                  className="border-green-200 focus:border-green-500 min-h-[100px]"
                />
              </div>

              {/* Goals */}
              <div className="space-y-4">
                <Label>Primary Goals *</Label>
                <RadioGroup onValueChange={(value) => handleInputChange("goals", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weight-loss" id="weight-loss" />
                    <Label htmlFor="weight-loss">Weight Loss</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weight-gain" id="weight-gain" />
                    <Label htmlFor="weight-gain">Weight Gain</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fitness" id="fitness" />
                    <Label htmlFor="fitness">Fitness & Muscle Building</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lifestyle" id="lifestyle" />
                    <Label htmlFor="lifestyle">Lifestyle Change</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Best Time to Contact *</Label>
                <Select onValueChange={(value) => handleInputChange("contactTime", value)}>
                  <SelectTrigger className="border-green-200 focus:border-green-500">
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg">
                Submit Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
