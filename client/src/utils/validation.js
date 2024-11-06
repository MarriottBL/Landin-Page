// Form validation rules
export const validateProduct = (data) => {
    const errors = {};

    // Product name validation
    if (!data.name?.trim()) {
        errors.name = 'Product name is required';
    } else if (data.name.length < 2) {
        errors.name = 'Product name must be at least 2 characters';
    }

    // Price validation
    if (!data.price) {
        errors.price = 'Price is required';
    } else if (parseFloat(data.price) <= 0) {
        errors.price = 'Price must be greater than 0';
    }

    // Image validation
    if (data.image) {
        if (data.image.size > 5000000) { // 5MB limit
            errors.image = 'Image size must be less than 5MB';
        }
        
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(data.image.type)) {
            errors.image = 'Only JPG, PNG, and GIF images are allowed';
        }
    } else if (!data.editMode) {
        errors.image = 'Image is required for new products';
    }

    return errors;
};

export const validateEvent = (data) => {
    const errors = {};

    // Event title validation
    if (!data.title?.trim()) {
        errors.title = 'Event title is required';
    }

    // Date validation
    if (!data.startDate) {
        errors.startDate = 'Start date is required';
    }
    
    if (!data.endDate) {
        errors.endDate = 'End date is required';
    }

    if (data.startDate && data.endDate) {
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);
        if (end < start) {
            errors.endDate = 'End date must be after start date';
        }
    }

    // Image validation
    if (data.image) {
        if (data.image.size > 5000000) {
            errors.image = 'Image size must be less than 5MB';
        }
        
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(data.image.type)) {
            errors.image = 'Only JPG, PNG, and GIF images are allowed';
        }
    } else if (!data.editMode) {
        errors.image = 'Image is required for new events';
    }

    return errors;
}; 