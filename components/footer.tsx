export default function Footer() {
  return (
    <footer className="bg-[#26306f] text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Eggleston Ventures. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-sm hover:text-opacity-80 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-opacity-80 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-opacity-80 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

