import EmailIcon from "@/components/Icons/EmailIcon";
import GitHubIcon from "@/components/Icons/GitHubIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";

export default function Footer() {
  const iconClasses = "fill-white transition hover:scale-125 hover:fill-cyan-400 duration-100";

  return (
    <footer id="contact" className="min-h-[50px] py-6 opacity-80 bg-gradient-to-br from-gray-700 to-gray-800">
      <div className="flex justify-center items-center gap-10 ">
        <GitHubIcon classes={iconClasses} />
        <LinkedinIcon classes={iconClasses} />
        <EmailIcon classes={iconClasses} />
      </div>
    </footer>
  );
}
