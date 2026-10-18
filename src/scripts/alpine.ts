import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

// Register plugins
Alpine.plugin(collapse);

// Set global Alpine and start
(window as any).Alpine = Alpine;
Alpine.start();
