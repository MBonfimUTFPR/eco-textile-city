import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin, Truck, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const collectPoints = [
  { name: "Centro de Coleta - Centro", coords: [-51.4619, -23.5505], type: "point" },
  { name: "Ponto de Coleta - Bairro Alto", coords: [-51.4580, -23.5620], type: "point" },
  { name: "Ponto de Coleta - Vila Nova", coords: [-51.4700, -23.5450], type: "point" },
  { name: "Estação de Reciclagem - Industrial", coords: [-51.4550, -23.5380], type: "point" },
];

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-51.4619, -23.5505], // Apucarana, PR
      zoom: 13,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      setIsMapLoaded(true);

      // Adicionar marcadores dos pontos de coleta
      collectPoints.forEach((point) => {
        const el = document.createElement("div");
        el.className = "marker";
        el.style.width = "40px";
        el.style.height = "40px";
        el.style.backgroundImage = "url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)";
        el.style.backgroundSize = "100%";

        new mapboxgl.Marker(el)
          .setLngLat(point.coords as [number, number])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3 style="font-weight: bold; margin-bottom: 4px;">${point.name}</h3>
               <p style="color: #666;">Ponto de coleta de resíduos têxteis</p>`
            )
          )
          .addTo(map.current!);
      });

      // Adicionar rota de exemplo (simulação de rota de caminhão)
      if (map.current?.getSource("route")) return;
      
      map.current?.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [-51.4619, -23.5505],
              [-51.4580, -23.5620],
              [-51.4700, -23.5450],
              [-51.4550, -23.5380],
              [-51.4619, -23.5505],
            ],
          },
        },
      });

      map.current?.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "hsl(45, 100%, 51%)",
          "line-width": 4,
          "line-dasharray": [2, 2],
        },
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

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
        {!mapboxToken ? (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Configuração do Mapa
              </CardTitle>
              <CardDescription>
                Para visualizar o mapa, você precisa adicionar sua chave de API do Mapbox.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Obtenha sua chave gratuita em{" "}
                  <a
                    href="https://mapbox.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    mapbox.com
                  </a>
                </AlertDescription>
              </Alert>
              
              <div className="space-y-2">
                <Label htmlFor="token">Token de Acesso do Mapbox</Label>
                <Input
                  id="token"
                  type="password"
                  placeholder="pk.eyJ1..."
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
              </div>
              
              <Button
                onClick={() => {
                  if (mapboxToken) {
                    setIsMapLoaded(false);
                  }
                }}
                className="w-full bg-gradient-primary"
              >
                Carregar Mapa
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map Container */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-card">
                <div ref={mapContainer} className="w-full h-[600px]" />
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
        )}
      </section>
    </div>
  );
};

export default Map;
