
import { AppCard } from "@/components/AppCard";
import { HealthMetric } from "@/components/HealthMetric";
import { StatusBadge } from "@/components/StatusBadge";
import { Bell, Calendar, Home, MessageSquare, User, Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 animate-slide-in">
        <div className="flex items-center gap-3">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <h1 className="text-lg font-semibold">Hi, John</h1>
            <p className="text-sm text-gray-700">Welcome back</p>
          </div>
        </div>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Bell className="w-6 h-6 text-gray-800" />
        </button>
      </header>

      {/* Next Appointment */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Next Appointment</h2>
          <button className="text-sm text-gray-700 hover:text-gray-900">View All</button>
        </div>
        <AppCard className="flex items-center gap-4">
          <img
            src="/placeholder.svg"
            alt="Dr. Sarah Smith"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-medium">Dr. Sarah Smith</h3>
              <StatusBadge status="confirmed" />
            </div>
            <p className="text-sm text-gray-600">Annual Check-up</p>
            <p className="text-sm text-gray-500 mt-1">Tomorrow at 10:30 AM</p>
          </div>
        </AppCard>
      </section>

      {/* Messages */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Messages</h2>
          <button className="text-sm text-gray-700 hover:text-gray-900">View All</button>
        </div>
        <div className="space-y-3">
          <AppCard className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Dr. Smith"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Dr. Smith</h3>
                <StatusBadge status="new" />
              </div>
              <p className="text-sm text-gray-600">Your lab results are ready to view</p>
              <p className="text-sm text-gray-500 mt-1">2h ago</p>
            </div>
          </AppCard>
          <AppCard className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Nurse Johnson"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium">Nurse Johnson</h3>
              </div>
              <p className="text-sm text-gray-600">Follow-up on your medication</p>
              <p className="text-sm text-gray-500 mt-1">1d ago</p>
            </div>
          </AppCard>
        </div>
      </section>

      {/* Health Summary */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Health Summary</h2>
        <div className="grid grid-cols-3 gap-3">
          <HealthMetric
            title="Blood Pressure"
            value="120/80"
            status="stable"
          />
          <HealthMetric
            title="Heart Rate"
            value="72 bpm"
            status="up"
          />
          <HealthMetric
            title="Weight"
            value="150 lbs"
            status="down"
          />
        </div>
      </section>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-900">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-900">
            <Calendar className="w-6 h-6" />
            <span className="text-xs">Appointments</span>
          </button>
          <button className="relative -top-6 p-4 rounded-full bg-nav-active text-white shadow-lg hover:bg-nav-active/90 transition-colors">
            <Plus className="w-6 h-6" />
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-900">
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs">Messages</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-gray-900">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
