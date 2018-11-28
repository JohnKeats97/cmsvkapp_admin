export default {
    serviceId: '9291',
    loadingPage: {
        namePage: 'Страница загрузки',
        background: {
            style: {
                background: 'url(https://social-sites.delivery-club.ru/img/covers/cover-3.jpg)',
                backgroundSize: 'cover'
            }
        },
        title: {
            text: 'Загрузка...',
            style: {
                color: '#ffffff',
                fontSize: '30px',
                left: '350px',
                top: '250px',
            }
        },
        loader: {
            style: {
                left: '370px',
                top: '315px'
            },
            circle: {
                style: {
                    background: '#696969',
                    backgroundSize: 'cover',
                    width: '26px',
                    height: '26px'
                }
            }
        }
    },
    addressPage: {
        namePage: 'Страница ввода адреса',
        title: {
            text: 'Введите адрес доставки',
            style: {
                color: '#ffffff',
                fontSize: '25px',
                left: '270px',
                top: '260px',
            }
        },
        background: {
            style: {
                background: 'url(https://social-sites.delivery-club.ru/img/covers/cover-3.jpg)',
                backgroundSize: 'cover'
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#9ccd2d',
                backgroundSize: 'cover',
                color: '#ffffff',
                height: '50px',
                width: '100px',
                borderRadius: '10px',
                left: '570px',
                top: '310px',
                fontSize: '15px',
                borderWidth: '0px'
            }
        },
        inputAddress: {
            placeholder: 'Адрес доставки...',
            style: {
                background: '#ffffff',
                backgroundSize: 'cover',
                color: '#000000',
                height: '50px',
                width: '390px',
                borderRadius: '10px',
                left: '170px',
                top: '310px',
                fontSize: '15px',
                borderWidth: '0px'
            }
        }
    },
    menuPage: {
        namePage: 'Меню',
        background: {
            style: {
                background: 'rgb(253, 253, 253)',
                backgroundSize: 'cover'
            }
        },
        header: {
            style: {
                background: '#fdfdfd',
                backgroundSize: 'cover'
            },
            buttonback: {
                text: 'Назад',
                style: {
                    background: 'rgb(246, 246, 246)',
                    backgroundSize: 'cover',
                    color: 'rgb(155, 150, 150)',
                    borderRadius: '10px',
                    borderWidth: '0px',
                    fontSize: '17px'
                }
            },
            address: {
                style: {
                    color: 'rgb(46, 46, 51)',
                    fontSize: '20px',
                    top: '15px'
                }
            },
            basket: {
                style: {
                    background: 'rgb(246, 246, 246)',
                    backgroundSize: 'cover',
                    color: 'rgb(155, 150, 150)',
                    fontSize: '17px'
                }
            }
        },
        title: {
            style: {
                color: 'rgb(46, 46, 51)',
                fontSize: '20px'
            }
        },
        buttonOk: {
            text: 'Заказать',
            style: {
                background: '#9ccd2d',
                backgroundSize: 'cover',
                color: '#ffffff',
                width: '100px',
                borderRadius: '2px',
                fontSize: '15px'
            }
        }
    },
    productPage: {
        namePage: 'Страница блюда',
        background: {
            style: {
                background: 'rgba(46,46,51,.2)',
                backgroundSize: 'cover'
            }
        },
        buttonClose: {
            style: {
                top: '20px',
                left: '585px'
            }
        },
        inputCount: {
            style: {
                top: '515px',
                left: '335px'
            }
        },
        productContainer: {
            style: {
                background: '#ffffff',
                backgroundSize: 'cover',
                height: '600px',
                width: '350px',
                top: '20px',
                left: '230px'
            }
        },
        imageContainer: {
            style: {
                background: '#f6f6f6',
                backgroundSize: 'cover',
                height: '220px',
                width: '350px',
                top: '20px',
                left: '230px'
            },
            image: {
                src: 'https://www.delivery-club.ru//media/cms/relation_product/15275/301976305_f.jpg'
            }
        },
        title: {
            text: 'Кинг Наггетс (станд.)',
            style: {
                color: '#000000',
                fontSize: '25px',
                left: '270px',
                top: '250px',
                width: '270px'
            }
        },
        description: {
            text: 'Наши наггетсы сделаны из нежного белого куриного мяса в легкой хрустящей панировке. Рекомендуем к ним восемь разных, но одинаково вкусных соусов на выбор: сырный, кетчуп, барбекю, кисло-сладкий, карри, чесночный, горчичный, сацебели.',
            style: {
                color: '#000000',
                fontSize: '17px',
                left: '260px',
                top: '290px',
                width: '270px'
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#97c62b',
                backgroundSize: 'cover',
                color: '#000533',
                height: '40px',
                width: '300px',
                borderRadius: '5px',
                left: '255px',
                top: '570px',
                fontSize: '15px',
                borderWidth: '0px'
            }
        },
    },
    basketPage: {
        namePage: 'Корзина покупок',
        background: {
            style: {
                background: 'url(https://data2.1freewallpapers.com/detail/spaghetti-vegetables-oil.jpg)', //'rgba(46,46,51,.2)'
                backgroundSize: 'cover'
            }
        },
        productContainer: {
            style: {
                background: '#ffffff',
                backgroundSize: 'cover',
                left: '220px'
            }
        },
        foodContainer: {
            style: {
                background: '#ffffff',
                backgroundSize: 'cover'
            }
        },
        textContainer: {
            order: {
                style: {
                    color: '#919399',
                    fontSize: '18px'
                }
            },
            delivery: {
                style: {
                    color: '#919399',
                    fontSize: '18px'
                }
            },
            result: {
                style: {
                    color: '#2e2e33',
                    fontSize: '21px'
                }
            }
        },
        buttonOK: {
            text: 'Принять',
            style: {
                background: '#97c62b',
                backgroundSize: 'cover',
                color: '#ffffff',
                height: '40px',
                width: '300px',
                borderRadius: '5px',
                left: '270px',
                top: '590px',
                fontSize: '15px',
                borderWidth: '0px'
            }
        }
    },
    payPage: {
        namePage: 'Страница оплаты',
        background: {
            style: {
                background: '#ffffff',
                backgroundSize: 'cover'
            }
        },
        header: {
            style: {
                background: '#ffffff',
                backgroundSize: 'cover'
            },
            buttonback: {
                text: 'Назад',
                style: {
                    width: '100px',
                    background: '#eee',
                    backgroundSize: 'cover',
                    color: '#2e2e33',
                    borderRadius: '10px',
                    borderWidth: '0px'
                }
            }
        },
        leftPanel: {
            title: {
                text: 'Доставка',
                style: {
                    color: '#000000',
                    fontSize: '25px',
                    left: '70px',
                    top: '20px',
                }
            },
            telephone: {
                style: {
                    left: '70px',
                    top: '70px'
                },
                title: {
                    text: 'Телефон',
                    style: {
                        color: '#f36',
                        fontSize: '20px'
                    }
                },
                input: {
                    placeholder: 'телефон',
                    style: {
                        background: '#ffffff',
                        backgroundSize: 'cover',
                        color: '#000000',
                        height: '40px',
                        width: '420px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            address: {
                text: 'Москва, 4-й Добрынинский переулок, 8',
                style: {
                    color: '#000000',
                    fontSize: '22px',
                    left: '70px',
                    top: '190px',
                }
            },
            entrance: {
                style: {
                    left: '70px',
                    top: '255px'
                },
                title: {
                    text: 'Подъезд',
                    style: {
                        color: '#000000',
                        fontSize: '17px'
                    }
                },
                input: {
                    placeholder: 'подъезд',
                    style: {
                        background: '#ffffff',
                        backgroundSize: 'cover',
                        color: '#000000',
                        height: '40px',
                        width: '190px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            intercom: {
                style: {
                    left: '300px',
                    top: '255px'
                },
                title: {
                    text: 'Домофон',
                    style: {
                        color: '#000000',
                        fontSize: '17px'
                    }
                },
                input: {
                    placeholder: 'код домофона',
                    style: {
                        background: '#ffffff',
                        backgroundSize: 'cover',
                        color: '#000000',
                        height: '40px',
                        width: '190px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            apartment: {
                style: {
                    left: '70px',
                    top: '370px'
                },
                title: {
                    text: 'Кв/Офис',
                    style: {
                        color: '#000000',
                        fontSize: '17px'
                    }
                },
                input: {
                    placeholder: 'квартра или офис',
                    style: {
                        background: '#ffffff',
                        backgroundSize: 'cover',
                        color: '#000000',
                        height: '40px',
                        width: '190px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            floor: {
                style: {
                    left: '300px',
                    top: '370px'
                },
                title: {
                    text: 'Этаж',
                    style: {
                        color: '#000000',
                        fontSize: '17px'
                    }
                },
                input: {
                    placeholder: 'этаж',
                    style: {
                        background: '#ffffff',
                        backgroundSize: 'cover',
                        color: '#000000',
                        height: '40px',
                        width: '190px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            },
            pay: {
                style: {
                    color: '#000000',
                    fontSize: '22px',
                    left: '70px',
                    top: '467px',
                }
            },
            comment: {
                style: {
                    left: '70px',
                    top: '520px'
                },
                title: {
                    text: 'Комментарии к заказу',
                    style: {
                        color: '#000000',
                        fontSize: '20px'
                    }
                },
                input: {
                    placeholder: 'комментрарии к заказу',
                    style: {
                        background: '#ffffff',
                        backgroundSize: 'cover',
                        color: '#000000',
                        height: '80px',
                        width: '420px',
                        borderRadius: '10px',
                        fontSize: '15px',
                        borderWidth: '1px'
                    }
                }
            }
        },
        rightPanel: {
            style: {
                background: '#f1efef',
                backgroundSize: 'cover'
            },
            textContainer: {
                order: {
                    style: {
                        color: '#919399',
                        fontSize: '18px'
                    }
                },
                delivery: {
                    style: {
                        color: '#919399',
                        fontSize: '18px'
                    }
                },
                result: {
                    style: {
                        color: '#2e2e33',
                        fontSize: '21px'
                    }
                }
            },
            buttonOK: {
                text: 'Принять',
                style: {
                    background: '#97c62b',
                    backgroundSize: 'cover',
                    color: '#ffffff',
                    height: '40px',
                    width: '200px',
                    borderRadius: '5px',
                    left: '45px',
                    top: '190px',
                    fontSize: '15px',
                    borderWidth: '0px'
                }
            }
        }
    }
}
