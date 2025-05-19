import { useToast } from "@/hooks/use-toast";
import BackgroundElements from "@/components/BackgroundElements";
import MenuButton from "@/components/MenuButton";
import { ChartBar, ClipboardList, Calendar, FileText } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleMenuClick = (menuName: string) => {
    toast({
      title: `${menuName} Terpilih`,
      description: `Anda Akan menuju ke ${menuName}.`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative bg-purple-900 overflow-hidden">
      {/* Background elements */}
      <BackgroundElements />

      {/* Content overlay */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-100 to-pink-300">
            Menu Utama
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-16">Daftar Aplikasi</p>

        {/* Menu Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <a
            href="https://satudata.kemenagtpi.my.id"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleMenuClick("Satu Data")}
          >
            <MenuButton
              icon={<ChartBar size={36} />}
              label="Satu Data"
              color="purple"
              delay="delay-100"
            />
          </a>
{/*
          <a
            href="https://e-survei.kemenagtpi.my.id"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleMenuClick("E-Survei")}
          >
            <MenuButton
              icon={<ClipboardList size={36} />}
              label="E-Survei"
              color="blue"
              delay="delay-200"
            />
          </a> */}

          {/* <a
            href="https://elcuti.kemenagtpi.my.id"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleMenuClick("ElCuti")}
          >
            <MenuButton
              icon={<Calendar size={36} />}
              label="ElCuti"
              color="pink"
              delay="delay-300"
            />
          </a> */}

          <a
            href="https://stl.kemenagtpi.my.id"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleMenuClick("Monitoring Dokumen")}
          >
            <MenuButton
              icon={<FileText size={36} />}
              label="Monitoring Dokumen"
              color="orange"
              delay="delay-400"
            />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-gray-400 text-sm z-10">
        © 2025 Kementerian Agama Kota Tanjungpinang
      </div>
    </div>
  );
};

export default Index;
