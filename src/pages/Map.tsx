import { MapPin, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import mapPreview from "@/assets/map-preview.jpg";

const collectPoints = [
  { name: "Centro de Coleta - Centro", coords: [-51.4619, -23.5505], type: "point" },
  { name: "Ponto de Coleta - Bairro Alto", coords: [-51.4580, -23.5620], type: "point" },
  { name: "Ponto de Coleta - Vila Nova", coords: [-51.4700, -23.5450], type: "point" },
  { name: "Estação de Reciclagem - Industrial", coords: [-51.4550, -23.5380], type: "point" },
];

const Map = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-10 w-10 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Mapa de Coleta
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90">
            Encontre os pontos de coleta mais próximos e acompanhe as rotas dos caminhões.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-card">
              <div className="w-full h-[600px] bg-muted flex items-center justify-center relative">
                <img 
                  src={mapPreview}
                  alt="Mapa de Apucarana mostrando pontos de coleta e rotas dos caminhões"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

            {/* Legend and Info */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Pontos de Coleta
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {collectPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary transition-colors">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium">{point.name}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-card bg-accent/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-accent" />
                    Rota dos Caminhões
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    As linhas pontilhadas amarelas indicam as rotas de coleta. Os caminhões passam regularmente pelos pontos marcados.
                  </p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
