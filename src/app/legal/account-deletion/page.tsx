import React from "react";
import Link from "next/link";
import LegalNavbar from "../LegalNavbar";
import LegalFooter from "../LegalFooter";

const AccountDeletion = () => (
  <>
    <LegalNavbar active="/legal/account-deletion" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-3xl md:text-4xl font-bold mb-4">Account Deletion Request</h1>
          <p className="text-base md:text-lg text-[#D1D1D1] leading-relaxed">
            We respect your right to control your personal data. If you wish to delete your iExplore account, 
            this page provides all the information and steps you need to permanently remove your account and data.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Account Deletion Process</h2>
          
          <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30 mb-6">
            <h3 className="text-lg font-medium mb-3 text-red-400">⚠️ Important Notice</h3>
            <p className="text-sm md:text-base text-[#D1D1D1] mb-4">
              Account deletion is permanent and cannot be undone. Once deleted, you will lose:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
              <li>Your profile and account information</li>
              <li>Event history and bookings</li>
              <li>Favorite venues and preferences</li>
              <li>Reviews and ratings you've posted</li>
              <li>Loyalty points and rewards</li>
              <li>Chat messages and social connections</li>
            </ul>
          </div>

          <div className="bg-brandDarkNeutral/50 p-6 rounded-lg border border-gold-500/20 mb-8">
            <h3 className="text-lg font-medium mb-3 text-gold-500">How to Request Account Deletion</h3>
            <p className="text-sm md:text-base text-[#D1D1D1] mb-4">
              To delete your account, send an email to our support team with the following information:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1] mb-4">
              <li><strong>Subject:</strong> "Account Deletion Request"</li>
              <li><strong>Your registered email address</strong></li>
              <li><strong>Your full name</strong> (as registered)</li>
              <li><strong>Phone number</strong> (for verification)</li>
              <li><strong>Reason for deletion</strong> (optional)</li>
            </ul>
            <div className="bg-gold-500/10 p-4 rounded border border-gold-500/30">
              <p className="text-sm font-medium text-gold-500 mb-1">Email Address:</p>
              <p className="text-base">
                <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 hover:underline font-medium">
                  privacy@iexploreonline.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">What Happens After Deletion Request</h2>
          
          <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                <h4 className="font-medium text-blue-400 mb-2">Verification</h4>
                <p className="text-xs md:text-sm text-[#D1D1D1]">We verify your identity within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                <h4 className="font-medium text-blue-400 mb-2">Processing</h4>
                <p className="text-xs md:text-sm text-[#D1D1D1]">Account deletion processed within 7 days</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                <h4 className="font-medium text-blue-400 mb-2">Confirmation</h4>
                <p className="text-xs md:text-sm text-[#D1D1D1]">Email confirmation sent when complete</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Data Retention After Deletion</h2>
          
          <div className="space-y-4">
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
              <h3 className="text-lg font-medium mb-2 text-green-400">Immediately Deleted</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                <li>Profile information and photos</li>
                <li>App preferences and settings</li>
                <li>Social connections and chat history</li>
                <li>Location data and check-ins</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
              <h3 className="text-lg font-medium mb-2 text-yellow-400">Retained for Legal/Financial Purposes (Up to 7 Years)</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                <li>Transaction records (anonymized)</li>
                <li>Tax and accounting records</li>
                <li>Fraud prevention data</li>
                <li>Legal compliance records</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
              <h3 className="text-lg font-medium mb-2 text-purple-400">Analytics Data (Anonymized)</h3>
              <p className="text-sm md:text-base text-[#D1D1D1]">
                Anonymized usage data may be retained for analytics purposes but cannot be linked back to you personally.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Alternative Options</h2>
          
          <p className="text-sm md:text-base text-[#D1D1D1] mb-6">
            If you're not ready for permanent deletion, consider these alternatives:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-gold-500/20">
              <h3 className="text-lg font-medium mb-2 text-gold-500">Deactivate Account</h3>
              <p className="text-sm md:text-base text-[#D1D1D1]">
                Temporarily hide your profile while keeping your data. You can reactivate anytime.
              </p>
            </div>

            <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-gold-500/20">
              <h3 className="text-lg font-medium mb-2 text-gold-500">Privacy Settings</h3>
              <p className="text-sm md:text-base text-[#D1D1D1]">
                Adjust what data we collect and how your profile appears to others.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Contact Information</h2>
          
          <div className="bg-brandDarkNeutral/50 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-lg font-medium mb-4 text-gold-500">Need Help?</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-[#F2F1E8]">Privacy & Data Protection</h4>
                <p className="text-sm text-[#D1D1D1] mb-1">
                  Email: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 hover:underline">privacy@iexploreonline.com</a>
                </p>
                <p className="text-sm text-[#D1D1D1]">Response time: 24-48 hours</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 text-[#F2F1E8]">General Support</h4>
                <p className="text-sm text-[#D1D1D1] mb-1">
                  Email: <a href="mailto:support@iexploreonline.com" className="text-gold-500 hover:underline">support@iexploreonline.com</a>
                </p>
                <p className="text-sm text-[#D1D1D1]">Response time: 24-48 hours</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gold-500/20">
              <p className="text-sm text-[#D1D1D1]">
                <strong>IXPL Limited</strong><br />
                Lagos, Nigeria<br />
                Website: <a href="https://www.iexploreonline.com" className="text-gold-500 hover:underline">www.iexploreonline.com</a>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
            <h3 className="text-lg font-medium mb-3 text-blue-400">Legal Rights</h3>
            <p className="text-sm md:text-base text-[#D1D1D1] mb-4">
              Your account deletion rights are protected under the Nigeria Data Protection Regulation (NDPR) 
              and other applicable data protection laws. You have the right to:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
              <li>Request deletion of your personal data</li>
              <li>Receive confirmation when deletion is complete</li>
              <li>File a complaint with the Nigeria Data Protection Commission if needed</li>
            </ul>
          </div>
        </section>

        <footer className="text-center">
          <Link 
            href="/legal/legal-navigation" 
            className="inline-block bg-gold-500 text-brandDark px-6 py-3 rounded-xl font-bold hover:bg-white transition"
          >
            ← Back to Legal Center
          </Link>
        </footer>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default AccountDeletion;