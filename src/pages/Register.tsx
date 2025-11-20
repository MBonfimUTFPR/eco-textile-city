import { useState } from "react";
import { FileText, Package, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    tipo: "",
    quantidade: "",
    endereco: "",
    observacoes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Cadastro realizado com sucesso! Entraremos em contato em breve.");
    setFormData({ tipo: "", quantidade: "", endereco: "", observacoes: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-10 w-10 text-primary-foreground" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Cadastro de Resíduos Têxteis
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90">
            Registre seus resíduos têxteis para coleta. Nossa equipe entrará em contato para agendar a retirada.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="container mx-auto max-w-3xl px-4 py-12">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">Informações do Resíduo</CardTitle>
            <CardDescription>
              Preencha os dados abaixo para solicitar a coleta de resíduos têxteis.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tipo de Resíduo */}
              <div className="space-y-2">
                <Label htmlFor="tipo" className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  Tipo de Resíduo Têxtil
                </Label>
                <Select
                  value={formData.tipo}
                  onValueChange={(value) => setFormData({ ...formData, tipo: value })}
                >
                  <SelectTrigger id="tipo">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roupas">Roupas Usadas</SelectItem>
                    <SelectItem value="tecidos">Tecidos e Retalhos</SelectItem>
                    <SelectItem value="cortinas">Cortinas e Estofados</SelectItem>
                    <SelectItem value="calcados">Calçados Têxteis</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Quantidade Estimada */}
              <div className="space-y-2">
                <Label htmlFor="quantidade">Quantidade Estimada (kg)</Label>
                <Input
                  id="quantidade"
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="Ex: 5.5"
                  value={formData.quantidade}
                  onChange={(e) => setFormData({ ...formData, quantidade: e.target.value })}
                  required
                />
              </div>

              {/* Endereço */}
              <div className="space-y-2">
                <Label htmlFor="endereco" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Endereço para Coleta
                </Label>
                <Input
                  id="endereco"
                  placeholder="Rua, número, bairro"
                  value={formData.endereco}
                  onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                  required
                />
              </div>

              {/* Observações */}
              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações (opcional)</Label>
                <Textarea
                  id="observacoes"
                  placeholder="Informações adicionais sobre o resíduo..."
                  rows={4}
                  value={formData.observacoes}
                  onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full bg-gradient-primary">
                <Calendar className="mr-2 h-5 w-5" />
                Solicitar Coleta
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Prazo de Resposta</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nossa equipe entrará em contato em até 48 horas úteis para agendar a coleta.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-lg">O que podemos coletar?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Roupas, tecidos, cortinas, estofados e calçados têxteis em qualquer condição.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Register;
