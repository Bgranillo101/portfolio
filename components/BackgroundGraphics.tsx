export function BackgroundGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Hero area orbs */}
      <div className="bg-orb bg-orb--purple w-[500px] h-[500px] -top-[100px] -left-[150px] opacity-60" />
      <div className="bg-orb bg-orb--blue w-[400px] h-[400px] top-[200px] right-[-100px] opacity-50" />
      <div className="bg-orb bg-orb--cyan w-[300px] h-[300px] top-[600px] left-[10%] opacity-40" />

      {/* About / Education area */}
      <div className="bg-mesh w-[600px] h-[600px] top-[900px] right-[-200px]" />
      <div className="bg-orb bg-orb--pink w-[350px] h-[350px] top-[1200px] left-[-100px] opacity-40" />

      {/* Experience area */}
      <div className="bg-orb bg-orb--purple w-[450px] h-[450px] top-[1800px] right-[5%] opacity-35" />
      <div className="bg-orb bg-orb--blue w-[300px] h-[300px] top-[2200px] left-[15%] opacity-30" />

      {/* Projects area */}
      <div className="bg-mesh w-[700px] h-[700px] top-[2800px] left-[-250px]" />
      <div className="bg-orb bg-orb--cyan w-[400px] h-[400px] top-[3000px] right-[-50px] opacity-45" />
      <div className="bg-orb bg-orb--pink w-[250px] h-[250px] top-[3400px] left-[40%] opacity-30" />

      {/* Skills area */}
      <div className="bg-orb bg-orb--purple w-[350px] h-[350px] top-[3800px] left-[-80px] opacity-40" />
      <div className="bg-orb bg-orb--blue w-[500px] h-[500px] top-[4200px] right-[-150px] opacity-35" />

      {/* Lifestyle / Contact area */}
      <div className="bg-mesh w-[500px] h-[500px] top-[4600px] right-[10%]" />
      <div className="bg-orb bg-orb--cyan w-[400px] h-[400px] top-[5000px] left-[5%] opacity-40" />
      <div className="bg-orb bg-orb--purple w-[300px] h-[300px] top-[5400px] right-[20%] opacity-30" />

      {/* Accent lines */}
      <div className="bg-line bg-gradient-to-b from-transparent via-accent-1/30 to-transparent left-[8%] top-[400px]" style={{ animationDelay: "0s" }} />
      <div className="bg-line bg-gradient-to-b from-transparent via-accent-2/25 to-transparent right-[12%] top-[1500px]" style={{ animationDelay: "2s" }} />
      <div className="bg-line bg-gradient-to-b from-transparent via-accent-3/20 to-transparent left-[25%] top-[2600px]" style={{ animationDelay: "4s" }} />
      <div className="bg-line bg-gradient-to-b from-transparent via-accent-1/25 to-transparent right-[30%] top-[3800px]" style={{ animationDelay: "1s" }} />
      <div className="bg-line bg-gradient-to-b from-transparent via-accent-2/20 to-transparent left-[60%] top-[4800px]" style={{ animationDelay: "3s" }} />
    </div>
  );
}
