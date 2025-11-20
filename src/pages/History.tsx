import { History as HistoryIcon, TrendingUp, Award, Leaf, Droplets } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const historyItems = [
  {
    id: 1,
    date: "10 Nov 2025",
    type: "Roupas Usadas",
    quantidade: "15.5 kg",
    status: "Coletado",
  },
  {
    id: 2,
    date: "25 Out 2025",
    type: "Tecidos e Retalhos",
    quantidade: "8.2 kg",
    status: "Coletado",
  },
  {
    id: 3,
    date: "5 Out 2025",
    type: "Cortinas",
    quantidade: "12.0 kg",
    status: "Coletado",
  },
  {
    id: 4,
    date: "18 Set 2025",
    type: "Roupas Usadas",
    quantidade: "20.3 kg",
    status: "Coletado",
  },
];

const impactStats = [
  {
    icon: Leaf,
    title: "CO₂ Evitado",
    value: "112 kg",
    description: "Equivalente a plantar 5 árvores",
    color: "text-success",
  },
  {
    icon: Droplets,
    title: "Água Economizada",
    value: "56.000 L",
    description: "Suficiente para 280 banhos",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    title: "Total Reciclado",
    value: "56 kg",
    description: "Nos últimos 6 meses",
    color: "text-accent",
  },
];

const History = () => {
  const totalKg = historyItems.reduce((acc, item) => acc + parseFloat(item.quantidade), 0);
  const goalKg = 100;
  const progress = (totalKg / goalKg) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-4">
            <HistoryIcon className="h-10 w-10 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Seu Histórico
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90">
            Acompanhe seus depósitos e veja o impacto positivo que você está gerando para o meio ambiente.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {impactStats.map((stat, idx) => (
            <Card key={idx} className="shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{stat.title}</CardTitle>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <CardDescription>{stat.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Card */}
        <Card className="shadow-card mb-12 bg-gradient-to-br from-success/10 to-success/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-success" />
                  Meta de Reciclagem 2025
                </CardTitle>
                <CardDescription className="mt-2">
                  Você está a caminho de atingir sua meta anual!
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {totalKg.toFixed(1)} / {goalKg} kg
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="h-4 mb-2" />
            <p className="text-sm text-muted-foreground">
              {progress.toFixed(0)}% concluído - Continue assim!
            </p>
          </CardContent>
        </Card>

        {/* History Table */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Histórico de Depósitos</CardTitle>
            <CardDescription>
              Todos os seus registros de coleta de resíduos têxteis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {historyItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{item.type}</div>
                    <div className="text-sm text-muted-foreground">{item.date}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold text-primary text-lg">{item.quantidade}</div>
                    </div>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact Message */}
        <Card className="mt-8 bg-gradient-accent text-accent-foreground shadow-card">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Parabéns pelo seu compromisso!</h3>
            <p className="text-lg">
              Suas ações estão fazendo a diferença para um futuro mais sustentável. 🌱
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default History;
