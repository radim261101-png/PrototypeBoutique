import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import type { Product } from '@shared/schema';

// Define a type for the data that will be inserted into localStorage
interface InsertOrder {
  customerName: string;
  customerPhone: string;
  quantity: number;
}

interface OrderFormProps {
  product: Product;
}

export default function OrderForm({ product }: OrderFormProps) {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const isRTL = i18n.language === 'ar';

  const [formData, setFormData] = useState<InsertOrder>({
    customerName: '',
    customerPhone: '',
    quantity: 1,
  });

  const [submitted, setSubmitted] = useState(false);

  const orderMutation = useMutation({
    mutationFn: async (orderData: InsertOrder) => {
      // Save order to localStorage instead of API
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      const newOrder = {
        ...orderData,
        id: crypto.randomUUID(),
        totalPrice: (parseFloat(product.price) * orderData.quantity).toFixed(2),
        timestamp: new Date().toISOString(),
      };
      orders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));
      return newOrder;
    },
    onSuccess: () => {
      // Assuming 'form.reset()' was intended for a form ref, but since we're using local state, we'll reset formData
      setFormData({
        customerName: '',
        customerPhone: '',
        quantity: 1,
      });
      setSubmitted(true); // Set submitted to true to show success message
      toast({
        title: t('order.success'),
        description: t('order.successMessage'), // Assuming successMessage is a translation key
      });
    },
    onError: (error: Error) => {
      toast({
        title: t('order.error'),
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.customerPhone || formData.quantity < 1) {
      toast({
        title: t('order.error'),
        description: t('order.error'), // Consider a more specific error message for validation
        variant: 'destructive',
      });
      return;
    }
    orderMutation.mutate(formData);
  };

  if (submitted) {
    return (
      <Card className="p-8 text-center" data-testid="order-success">
        <div className="flex flex-col items-center gap-4">
          <CheckCircle2 className="h-16 w-16 text-chart-2" />
          <h3 className="text-2xl font-semibold">{t('order.success')}</h3>
          <p className="text-muted-foreground">{t('order.successMessage')}</p> {/* Using successMessage here too */}
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8" data-testid="order-form">
      <div className="flex items-center gap-3 mb-6">
        <ShoppingBag className="h-6 w-6 text-primary" />
        <h3 className="text-xl md:text-2xl font-semibold" data-testid="order-form-title">
          {t('order.title')}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="customerName" data-testid="label-name">
            {t('order.name')}
          </Label>
          <Input
            id="customerName"
            type="text"
            value={formData.customerName}
            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            required
            data-testid="input-name"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="customerPhone" data-testid="label-phone">
            {t('order.phone')}
          </Label>
          <Input
            id="customerPhone"
            type="tel"
            value={formData.customerPhone}
            onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
            required
            data-testid="input-phone"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity" data-testid="label-quantity">
            {t('order.quantity')}
          </Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
            required
            data-testid="input-quantity"
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={orderMutation.isPending}
          data-testid="button-submit-order"
        >
          {orderMutation.isPending ? '...' : t('order.submit')}
        </Button>
      </form>
    </Card>
  );
}