const AuthSharedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-20 h-full bg-slate-200 items-center justify-center">
      
      {children}
    </div>
  );
};

export default AuthSharedLayout;
