import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Chart } from 'chart.js';

import { ReportsFilterPage } from '../reportsFilter/reportsFilter';
 
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {
 
    @ViewChild('chargebacksByTransactionMonth') chargebacksByTransactionMonth : any;
    @ViewChild('chargebacksByTransactionAmount') chargebacksByTransactionAmount : any;
    @ViewChild('chargebacksRatioByTransactionDateWeek') chargebacksRatioByTransactionDateWeek : any;
    @ViewChild('averageSpanBetweenChargeback') averageSpanBetweenChargeback : any;
    @ViewChild('cardType') cardType : any;
    @ViewChild('customerType') customerType : any;
    @ViewChild('domesticVsOffshore') domesticVsOffshore : any;
    @ViewChild('byCardTypePerProcessor') byCardTypePerProcessor : any;
    @ViewChild('byProcessor') byProcessor : any;
    @ViewChild('byBIN') byBIN : any;

    chargebacksByTransactionMonthChart: any;
    chargebacksByTransactionAmountChart: any;
    chargebacksRatioByTransactionDateWeekChart: any;
    averageSpanBetweenChargebackChart: any;
    cardTypeChart: any;
    customerTypeChart: any;
    domesticVsOffshoreChart: any;
    byCardTypePerProcessorChart: any;
    byProcessorChart: any;
    byBINChart: any;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
 
    }
 
    ionViewDidLoad() {
 
        this.chargebacksByTransactionMonthChart = new Chart(this.chargebacksByTransactionMonth.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Feb 2017"],
                datasets: [{
                    label: '%',
                    data: [66],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            callback: function(value: any) {
                                return value + "%"
                            }
                        }
                    }]
                }
            }
 
        });

        this.chargebacksByTransactionAmountChart = new Chart(this.chargebacksByTransactionAmount.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["<$3879", "<$4274", "<$4669", "<$5064", "<$5455"],
                datasets: [{
                    label: '%',
                    data: [72, 0, 0, 0, 33.3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            callback: function(value: any) {
                                return value + "%"
                            }
                        }
                    }],
                    xAxes: [{
                        // type: 'linear',
                        position: 'bottom'
                    }]                    
                }
            }
 
        });
 
        this.chargebacksRatioByTransactionDateWeekChart = new Chart(this.chargebacksRatioByTransactionDateWeek.nativeElement, {
 
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: '%',
                    data: [],
                    backgroundColor: [
                        
                    ],
                    borderColor: [
                        
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            callback: function(value: any) {
                                return value + "%"
                            }
                        }
                    }]
                }
            }
 
        });

        this.averageSpanBetweenChargebackChart = new Chart(this.averageSpanBetweenChargeback.nativeElement, {
 
            type: 'line',
            data: {
                labels: ["Week 11", "Week 12", "Week 14"],
                datasets: [
                    {
                        label: "Days",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [42, 43, 54],
                        spanGaps: false,
                    }
                ]
            }
 
        });

        this.cardTypeChart = new Chart(this.cardType.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Amex"],
                datasets: [{
                    label: '%',
                    data: [100],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "rgba(255, 206, 86, 0.9)"
                    ]
                }]
            }
 
        });

        this.customerTypeChart = new Chart(this.customerType.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Initial"],
                datasets: [{
                    label: '%',
                    data: [100],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "rgba(75, 192, 192, 0.9)"
                    ]
                }]
            }
 
        });

        this.domesticVsOffshoreChart = new Chart(this.domesticVsOffshore.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels: ["Domestic"],
                datasets: [{
                    label: '%',
                    data: [100],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(54, 162, 235, 0.9)'
                    ]
                }]
            }
 
        });

        this.byCardTypePerProcessorChart = new Chart(this.byCardTypePerProcessor.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Visa", "Mastercard", "Discover", "Amex"],
                datasets: [{
                    label: '%',
                    data: [40, 80, 60, 100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            callback: function(value: any) {
                                return value + "%"
                            }
                        }
                    }]
                }
            }
 
        });

        this.byProcessorChart = new Chart(this.byProcessor.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Domestic", "Offshore"],
                datasets: [{
                    label: '%',
                    data: [95, 85],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            callback: function(value: any) {
                                return value + "%"
                            }
                        }
                    }]
                }
            }
 
        });

        this.byBINChart = new Chart(this.byBIN.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Domestic", "Offshore"],
                datasets: [{
                    label: '%',
                    data: [66, 96],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 100,
                            callback: function(value: any) {
                                return value + "%"
                            }
                        }
                    }]
                }
            }
 
        });

    }

    openFilter(): any {
        let modal = this.modalCtrl.create(ReportsFilterPage/*, this.excludeTracks*/);
        modal.present();

        modal.onWillDismiss((data: any[]) => {
        if (data) {
            /*this.excludeTracks = data;
            this.updateMonthToDate();*/
        }
        });
    }
 
 
}