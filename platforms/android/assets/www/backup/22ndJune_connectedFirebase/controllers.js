<!-- 'use strict';

/* Controllers */
/*
var phonecatControllers = angular.module('phonecatControllers', {});

phonecatControllers.controller('PhoneListCtrl', {'$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }});

phonecatControllers.controller('PhoneDetailCtrl', {'$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images{0};
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }});
*/


var phonecatApp = angular.module("phonecatApp", ["firebase"]);

phonecatApp.controller('PhoneListCtrl', function ($scope, $firebaseArray) {
 /* $scope.phones = {
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  };;*/

var ref = new Firebase("https://luminous-fire-5434.firebaseio.com/DPMGLossary");
  // download the data into a local object
 
   $scope.DPMGLossary = $firebaseArray(ref);

/*$scope.phones = [{"name":"ABF ","snippet":"Account Based Forecasting, also known as Customer Planning or Customer Specific Forecasting (CSF), refers to a bottom up demand forecasting process which starts with customer retail forecast, then arrives at a customer shipment forecast to be aggregated into a supply chain forecast."},
{"name":"Abnormal Demand","snippet":"Service loss category which has occurred because the sales order items or schedule lines are flagged as abnormal demand in SAP CRM.It shows that sales order quantity deviates from the normal quantities by an abnormal amount."},
{"name":"ACV","snippet":"All Commodity Volume"},
{"name":"Ad hoc Pass","snippet":"Exception oriented pass"},
{"name":"Aggregation","snippet":"The principle under which all measures are combined to determine reporting status "},
{"name":"APICS ","snippet":"The Association for Operations Management offers certification in supply chain management and resource management.  The two different certifications are titled CPIM and CIRM. "},
{"name":"APO","snippet":"Advanced Planner and Optimizer, the planning software fromSAP AG."},
{"name":"ATO ","snippet":" Assembled to Order"},
{"name":"ATP ","snippet":" Available to Promise"},
{"name":"Backorders","snippet":"Sales document created whose order items cannot be confirmed due to lack of availability or material shortages."},
{"name":"Baseline","snippet":"Demand for business as distinguished from incremental impact from events"},
{"name":"Bias","snippet":"A set of results consistently above or below an established centerline that indicates the need for corrective action."},
{"name":"BOM ","snippet":" Bill of Materials"},
{"name":"Bucket Days","snippet":"The number of workdays within a repetitive planning period."},
{"name":"Causal Models","snippet":"A causal model is an abstract quantitative representation of real-world dynamics. Hence, a causal model attempts to describe the causal and other relationships, among a set of variables."},
{"name":"CBP ","snippet":"Consensus Business Planning"},
{"name":"CFPIM","snippet":"Certified Fellow in Production and Inventory Management"},
{"name":"CIRM","snippet":"Certififed in Integrated Resources Management"},
{"name":"CIRM","snippet":"Certififed in Integrated Resources Management-CIRM is a comprehensive educational program designed to help you understand the power of collaboration among organizational resources such as product development, marketing/sales, human resources, finance, and operations."},
{"name":"Consensus","snippet":"General agreeement "},
{"name":"Constrained Forecast","snippet":"The result of production planning process that can be supplied in the short run to manage customer demands."},
{"name":"CPFR ","snippet":"Collaborative, Planning, Forecasting and Replenishment is a concept popularized and institutionalized by the VICS organization to enable manufacturers and retailers to better collaborate on forecasting and  promotional planning to achieve supply chain efficiencies."},
{"name":"CPG ","snippet":"Consumer Packaged Goods, refers to the manufacturers and supplies in the Packaged Goods industry, a very specific reference to companies that manufacture or distribute Consumer Packaged Goods to the retail environment."},
{"name":"CPIM","snippet":"Certified in Production and Inventory Management, a certification offered by the APICS, the Association for Operations Management."},
{"name":"CRM","snippet":"Customer Relationship Management; the process and discipline to analyze the trade funds, promotional planning and execution and evaluating the effectiveness of promotions. Oracle CRM, Siebel, and SAP CRM are the dominant players in this space. Siebel and Demantra have been acquired by Oracle."},
{"name":"CRP ","snippet":"Continuous Replenishment Program, another term to denote VMI or Vendor Managed Inventories, where the supplier or manufacturer monitors the inventory at the customer warehouse on a continuous basis and writes the orders on behalf of the customer to ensure warehouses are adequately stocked."},

{"name":"CSCP ","snippet":"Certified Supply-Chain Professional"},
{"name":"CTO  ","snippet":"Configured to Order"},
{"name":"Cyclicality","snippet":"Demand for each product following a life-cycle pattern, with launch, growth, leveling and finally declining pattern"},
{"name":"Dampening","snippet":"make less strong or intense"},
{"name":"DC ","snippet":"Distribution Center"},
{"name":"DDSN ","snippet":"Demand Driven Supply Networks"},
{"name":"Demand Accruals","snippet":"Short term liabilities which continually occur during an accounting period but are not supported by written demand for payment."},
{"name":"Demand Accuracy","snippet":"The process of determining the accuracy of forecasts made regarding customer demand for a product."},
{"name":"Demand Management","snippet":"Major function of the sales and operations planning process where we worke with customers to adjust demand when there is shortage of inventory supply."},
{"name":"Demand Volatility","snippet":"Deviation of demand from the average"},
{"name":"Dependent Demand","snippet":"Demand for an item that is directly related to or derived from the demand for other items."},
{"name":"DP ","snippet":"Demand Planning, a functional and subject reference to the forecasting group and role"},
{"name":"DRP ","snippet":"Distribution Requirements Planning"},
{"name":"DTC ","snippet":"Direct To Channel"},
{"name":"Economic Forecasts","snippet":"A prediction of the likely impact on the business environment of factors such as inflation, interest rates, unemployment, government and consumer spending, etc."},
{"name":"EDI","snippet":"Electronic Data Interchange"},
{"name":"EOQ ","snippet":"Economic Order Quantity"},
{"name":"ETO ","snippet":"Engineered to Order"},
{"name":"Event Modeling","snippet":"Process to model Promotional Events and other extreme events "},
{"name":"Ex-post Forecasting","snippet":"Forecast of the history"},
{"name":"FAN ","snippet":"Flu Alert Network"},
{"name":"FG ","snippet":"Finished Goods"},
{"name":"FMCG ","snippet":"Fast Moving Consumer Goods"},
{"name":"Forecast Accuracy","snippet":"Measure of how close the actuals are to the forecasted quantity"},
{"name":"Forecast Consumption","snippet":"The process of subtracting demand generated by sales orders from forecasted demand thereby preventing demand being counted twice in the planning period."},
{"name":"Forecast Cycle","snippet":"Frequency at which your demand plans are re-forecasted"},
{"name":"Forecast Error","snippet":"The deviation of the actual from the forecasted quantity "},
{"name":"Forecast Horizon","snippet":"The forecast horizon is the length of time into the future for which forecasts are to be prepared. "},
{"name":"Forecast Inaccuracy","snippet":"The difference between the actual value of a parameter and the value indicated by an forecast"},
{"name":"Forecast Pass","snippet":"Systematic communication of forecast from demand planning to supply planning at the end of each forecast cycle"},
{"name":"FSI ","snippet":"Free Standing Insert , AKA "},
{"name":"Gross Demand","snippet":"Gross Demand is what was ordered or shipped in total. "},
{"name":"IBM ","snippet":"Integrated Business Planning"},
{"name":"IBP ","snippet":"Integrated Business Planning"},
{"name":"Independent Demand","snippet":"Demand for an item unrelated to the demand for other items."},
{"name":"Intermittent Demand","snippet":"Events that correspond to demands occur only sporadically"},
{"name":"Inventory","snippet":"Asset that is owned by a business that has the express purpose of being sold to a customer."},
{"name":"IO ","snippet":"Inventory Optimization"},
{"name":"JIT ","snippet":"Just In Time"},
{"name":"KPI ","snippet":"Key Performance Indicator"},
{"name":"LTL ","snippet":"Less than Truck Load"},
{"name":"MAD","snippet":"Mean Absolute Deviation, similar to MAPE before it becomes a percentage error. Academics respect this measure, largely due to confusion and mis-interpretations around the MAPE."},
{"name":"MAPE ","snippet":"Mean Absolute Percent Error a cross-sectional measure to calculate the demand forecast error across products, customers, divisions etc."},
{"name":"Market Intelligence","snippet":"Information relevant to a company's markets, gathered and analyzed specifically for the purpose of accurate and confident decision-making in determining strategy in areas such as market opportunity, market penetration strategy, and market development."},
{"name":"Model","snippet":"Mathematical representation that explains the relationship between different forces affecting demand"},
{"name":"Model Fit","snippet":"How closely your model fits the historical data"},
{"name":"Moving Average","snippet":"A succession of averages derived from successive segments (typically of constant size and overlapping) of a series of values."},
{"name":"MRP ","snippet":"Materials Requirements Planning"},
{"name":"MTD","snippet":"Month to date"},
{"name":"MTG ","snippet":"Month to Go"},
{"name":"MTO","snippet":"Made to Order, a type of production and inventory strategy that starts the manufacturing process only on receipt of the customer order. The manufacturer has the luxury of making the customer order, (and perhaps pay) and wait. Dell is a classic example of a MTO business model."},
{"name":"MTS ","snippet":"Made to Stock, a production and replenishment model that keeps inventory of products, anticipating customer orders."},
{"name":"Multivariate","snippet":"Including multiple variable quantities"},
{"name":"Net Demand","snippet":"Subtraction of returns from gross demand"},
{"name":"Noise","snippet":"Informal, extraneous, irrelevant, or meaningless facts, information or statistics."},
{"name":"OFS ","snippet":"Oil Field Services"},
{"name":"OLS ","snippet":"Ordinary Least Squares, the most basic methodology for model fitting by choosing the model that minimizes the residual error"},
{"name":"OTC ","snippet":"Over The Counter"},
{"name":"Outlier","snippet":"An outlier is an extreme data observation that is not expected to repeat in the future"},
{"name":"PMAD ","snippet":"Percent Mean Absolut"},
{"name":"POP ","snippet":"Point of Purchase"},
{"name":"POS ","snippet":"Point of Sale"},
{"name":"Processing lead time","snippet":"The time required to procure or manufacture an item. For manufactured assemblies, processing lead time equals the manufacturing lead time."},
{"name":"Regression","snippet":"The statistical process of predicting one or more continuous variables, such as profit or loss, based on other attributes in the dataset."},
{"name":"Replenishment","snippet":"movement of inventory from upstream,or reserve, or product storage locations to downstream or primary storage, picking and shipment locations."},
{"name":"RMSE ","snippet":"Root Mean Squared Error, a measure of model diagnostic and with more application in inventory management to set parameters for safety stock calculations."},
{"name":"Robustness","snippet":"Change of model given a small change of historical data"},
{"name":"Rough Cut Planner","snippet":"The routine that automatically calculates required resources for rough cut capacity planning (done when running a report or inquiry)."},
{"name":"S&OP ","snippet":"Sales and Operations Planning"},
{"name":"Safety Stock","snippet":"Quantity of stock planned to have in inventory to protect against fluctuations in demand and/or supply."},
{"name":"SCOR ","snippet":"Supply Chain Operations Reference Model"},
{"name":"Segmentation","snippet":"A data mining technique that analyzes data to discover mutually exclusive collections of records that share similar attributes sets."},
{"name":"Service Levels","snippet":"The extent to which a supplying resource satisfies customer requirements, often expressed in terms of error rate, resource availability or accuracy in meeting requested dates."},
{"name":"SIOP","snippet":"Sales, Inventory and Operations Planning"},
{"name":"SKU ","snippet":"Stock Keeping Unit"},
{"name":"SKU Mix Error","snippet":"Measurement of degree of error due to incorrect mix of products forecasted and produced"},
{"name":"SMI ","snippet":"Supplier Managed Inventory, very similar to VMI except here the manufacturer lets their inventories be managed by a supplier of key components and input products."},
{"name":"SNP","snippet":"Supply Network Planning"},
{"name":"Source forecast","snippet":"When loading a forecast into another forecast, the source forecast is the forecast you load from."},
{"name":"Standard Deviation","snippet":"A computed measure of vari- ability indicating the spread of the data set around the mean."},
{"name":"Standard Error","snippet":"the extent to which the mean obtained differs from the true mean of the population from which the sample was taken."},
{"name":"Statistical Forecast","snippet":"Long term decisions and decisions that change the inherent structure of the business"},
{"name":"Statistical Model","snippet":"Embodies a set of assumptions concerning the generation of the observed data, and similar data from a larger population"},
{"name":"Tactical Forecast","snippet":"Short term and near term decisions that reflect needs and activities in existing structures and processes"},
{"name":"Time fence","snippet":"A policy or guideline established to note where various restrictions or changes in operating procedures take place. The planning process cannot create or reschedule orders within the planning time fence."},
{"name":"Tolerance Band","snippet":"Confidence band around the ex-post forecast "},
{"name":"Unconstrained Forecast","snippet":"Forecasting of the customer needs in an unconstrained view"},
{"name":"Univariate","snippet":"Including one variable quantity"},
{"name":"Utilization","snippet":"Required capacity divided by available capacity."},
{"name":"VMI ","snippet":"Vendor Managed Inventories, where the supplier or manufacturer monitors the inventory at the customer warehouse on a continuous basis and writes the orders on behalf of the customer to ensure warehouses are adequately stocked."},
{"name":"Volatility","snippet":"The degree to which a particular price/quantity has fluctuated in the past."},
{"name":"WAPE ","snippet":"Weighted Absolute Percent Error - The same as weighted MAPE"},
{"name":"WIP","snippet":"Work in Process"}];*/

$scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    }

}


);


