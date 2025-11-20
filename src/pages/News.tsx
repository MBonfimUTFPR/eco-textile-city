import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    id: 1,
    title: "Novo ponto de coleta inaugurado no Centro",
    description: "A prefeitura inaugurou mais um ponto de coleta de resíduos têxteis na região central da cidade, facilitando o descarte consciente.",
    date: "15 de Novembro, 2025",
    category: "Infraestrutura",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Campanha de conscientização nas escolas",
    description: "Projeto educacional visa ensinar estudantes sobre a importância da reciclagem têxtil e seus benefícios ambientais.",
    date: "10 de Novembro, 2025",
    category: "Educação",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Meta de reciclagem superada em 2025",
    description: "A cidade alcançou 150% da meta anual de reciclagem de têxteis, evitando que toneladas de resíduos fossem para aterros.",
    date: "5 de Novembro, 2025",
    category: "Sustentabilidade",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Parceria com cooperativas locais",
    description: "Nova parceria fortalece a economia local e aumenta a capacidade de processamento de resíduos têxteis.",
    date: "1 de Novembro, 2025",
    category: "Economia",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="h-10 w-10 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Notícias e Atualizações
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Fique por dentro das últimas novidades sobre reciclagem têxtil e sustentabilidade em nossa cidade.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((news) => (
            <Card key={news.id} className="overflow-hidden shadow-card hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{news.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {news.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="gap-2 text-primary">
                  Ler mais
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
            Faça parte da mudança
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Cada pequena ação conta. Contribua para um futuro mais sustentável descartando seus resíduos têxteis corretamente.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              Cadastrar Resíduo
            </Button>
            <Button size="lg" variant="outline">
              Ver Pontos de Coleta
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
