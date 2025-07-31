const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Cookie Croquis. Built with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
