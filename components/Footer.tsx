import { LightningBoltIcon } from "@radix-ui/react-icons"

const Footer = () => {
  return (
    <footer>
        
        <hr className="w-11/12 mx-auto" />
       <section>
       
       </section>
        
        <section className="container pb-14 text-center">
        <h2 className="flex font-bold text-2xl gap-1 mt-10">
            <LightningBoltIcon className="w-7 h-7"/>
            ZapNote</h2>
        <h3>
          &copy; 2024 made with ❤️ by{" "}
          <a
            target="_blank"
            href="https://github.com/thefool76"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Thefool76
          </a>
        </h3>
      </section>
    </footer>
  )
}

export default Footer