import { useState, useEffect } from 'react';

/**
 * Hook personalizado para calcular cuántos elementos caben en un contenedor
 * y qué porcentaje del siguiente elemento puede mostrarse.
 * 
 * @param {Object} options - Opciones de configuración
 * @param {React.RefObject} options.containerRef - Referencia al contenedor
 * @param {number} options.itemWidth - Ancho de cada elemento en px
 * @param {number} options.gap - Espacio entre elementos en px
 * @param {boolean} options.includePartial - Si se debe mostrar un elemento parcial
 * @returns {Object} - Información sobre elementos visibles y parciales
 */
const useCarouselItemCalculator = ({ 
  containerRef, 
  itemWidth, 
  gap
}) => {
  const [metrics, setMetrics] = useState({
    visibleItems: 0,
    partialItemPercentage: 0,
    containerWidth: 0,
    remainingSpace: 0,
    totalItemWidth: itemWidth + gap
  });

  useEffect(() => {
    const calculateItems = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      const itemTotalWidth = itemWidth + gap;
      
      // Número de elementos completos que caben
      const completeItems = Math.floor(containerWidth / itemTotalWidth);
      
      // Espacio restante después de los elementos completos
      const remainingSpace = containerWidth - (completeItems * itemTotalWidth);
      
      // Qué porcentaje del siguiente elemento se puede mostrar
      const partialItemPercentage = remainingSpace / itemWidth;
      
      setMetrics({
        visibleItems: completeItems,
        partialItemPercentage: partialItemPercentage,
        containerWidth: containerWidth,
        remainingSpace: remainingSpace,
        totalItemWidth: itemTotalWidth
      });
    };
    
    // Cálculo inicial
    calculateItems();
    
    // Recalcular en resize
    window.addEventListener('resize', calculateItems);
    return () => window.removeEventListener('resize', calculateItems);
  }, [containerRef, itemWidth, gap]);

  return metrics;
};

export default useCarouselItemCalculator;